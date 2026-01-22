---
name: nano-banana-placeholders
description: Create frontend placeholder images for websites and mobile apps using Google "Nano Banana" (Gemini 3 Pro Image preview) via the Gemini/Generative Language API. Use when building UIs and you need quick hero/card/avatar/onboarding/empty-state images for mockups and prototypes.
---

# Nano Banana Placeholder Images Skill

Generate placeholder images you can drop into a mobile app or website while real assets are still in progress.

## Inputs to collect

- Asset list (what you need): hero, cards, avatars, onboarding, empty states, product tiles, backgrounds.
- Style anchor (one sentence you reuse across the whole app).
- Aspect ratio (1:1, 4:3, 16:9, 9:16) and resolution (1K, 2K, 4K).
- Constraints: no text, no logos, no watermark.

## Output expectations

- Return PNG/JPG/WEBP files named for UI usage (example: `hero_home.webp`, `card_01.webp`, `avatar_01.webp`).
- Provide 1-line alt text per image when helpful.

---

## Quick start (recommended): `generateContent`

Model id (Nano Banana): `gemini-3-pro-image-preview`

### Set your API key (keep it secret)

IMPORTANT: Do not commit API keys to git.

```bash
export GEMINI_API_KEY='AIzaSyA045SS3f2MIvVeAu_4CU_makWV32qdxWw'
```

### Script: `nano_banana_generate.sh`

What it does:
- Calls the Gemini API with `generateContent`.
- Attempts to request WebP when possible.
- Saves as `.webp` **only if the response MIME type is `image/webp`**. Otherwise it saves the returned format (PNG/JPEG/etc.).

Requires: `curl`, `jq`, `base64`

```bash
#!/usr/bin/env bash
set -euo pipefail

: "${GEMINI_API_KEY:?Set GEMINI_API_KEY in your environment}"

MODEL_ID="gemini-3-pro-image-preview"
ENDPOINT="https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent?key=${GEMINI_API_KEY}"

PROMPT="${1:?Usage: $0 \"prompt\" [out_base] [imageSize] [aspectRatio]}"
OUT_BASE_INPUT="${2:-out}"     # base name; extension will be chosen from response MIME
IMAGE_SIZE="${3:-1K}"          # 1K | 2K | 4K
ASPECT_RATIO="${4:-1:1}"       # 1:1, 4:3, 16:9, 9:16, ...

# Prefer WebP if supported by the API/model. If the API rejects outputMimeType,
# the script retries without it and still saves WebP only if the response is WebP.
PREFER_WEBP="${PREFER_WEBP:-1}"

b64decode() {
  base64 --decode 2>/dev/null || base64 -D
}

build_request() {
  local with_webp="$1"

  if [[ "$with_webp" == "1" ]]; then
    jq -n \
      --arg prompt "$PROMPT" \
      --arg imageSize "$IMAGE_SIZE" \
      --arg aspectRatio "$ASPECT_RATIO" \
      ' {
          contents: [
            { role: "user", parts: [ { text: $prompt } ] }
          ],
          generationConfig: {
            responseModalities: ["IMAGE","TEXT"],
            imageConfig: {
              imageSize: $imageSize,
              aspectRatio: $aspectRatio,
              outputMimeType: "image/webp"
            }
          }
        } '
  else
    jq -n \
      --arg prompt "$PROMPT" \
      --arg imageSize "$IMAGE_SIZE" \
      --arg aspectRatio "$ASPECT_RATIO" \
      ' {
          contents: [
            { role: "user", parts: [ { text: $prompt } ] }
          ],
          generationConfig: {
            responseModalities: ["IMAGE","TEXT"],
            imageConfig: {
              imageSize: $imageSize,
              aspectRatio: $aspectRatio
            }
          }
        } '
  fi
}

post_request() {
  local req_json="$1"
  printf '%s\n' "$req_json" > request.json

  # Capture HTTP code while writing the response JSON to disk.
  local http
  http="$(curl -sS -X POST -H "Content-Type: application/json" \
    -o response.json -w '%{http_code}' \
    "$ENDPOINT" -d @request.json)"

  printf '%s' "$http"
}

# 1) First attempt: include outputMimeType=image/webp when PREFER_WEBP=1.
REQ_JSON="$(build_request "$PREFER_WEBP")"
HTTP_CODE="$(post_request "$REQ_JSON")"

# 2) If it failed and looks like outputMimeType isn't accepted, retry without it.
if [[ "$HTTP_CODE" != "200" ]]; then
  if jq -e '.error.message? | tostring | test("outputMimeType"; "i")' response.json >/dev/null 2>&1; then
    REQ_JSON="$(build_request 0)"
    HTTP_CODE="$(post_request "$REQ_JSON")"
  fi
fi

if [[ "$HTTP_CODE" != "200" ]]; then
  echo "Request failed (HTTP $HTTP_CODE)."
  cat response.json
  exit 1
fi

IMG_B64="$(jq -r '[.. | objects | select(has("inlineData")) | .inlineData.data][0] // empty' response.json)"
MIME="$(jq -r '[.. | objects | select(has("inlineData")) | .inlineData.mimeType][0] // empty' response.json)"

if [[ -z "$IMG_B64" || "$IMG_B64" == "null" ]]; then
  echo "No image returned. Inspect response.json for details."
  exit 1
fi

case "$MIME" in
  image/webp) EXT="webp" ;;
  image/png)  EXT="png"  ;;
  image/jpeg) EXT="jpg"  ;;
  image/heic) EXT="heic" ;;
  image/heif) EXT="heif" ;;
  *)          EXT="bin"  ;;
esac

# Always write using the extension that matches the returned MIME type.
# This guarantees we only produce .webp when Nano Banana actually returned WebP.
BASE_NOEXT="$OUT_BASE_INPUT"
if [[ "$BASE_NOEXT" == *.* ]]; then
  BASE_NOEXT="${BASE_NOEXT%.*}"
fi
OUT_FILE="${BASE_NOEXT}.${EXT}"

printf '%s' "$IMG_B64" | b64decode > "$OUT_FILE"

TXT="$(jq -r '[.. | objects | select(has("text")) | .text] | join("\n")' response.json)"
if [[ -n "$TXT" && "$TXT" != "null" ]]; then
  printf '%s\n' "$TXT" > "${BASE_NOEXT}.txt"
fi

echo "Wrote: $OUT_FILE (mime: ${MIME:-unknown})"
```

Examples:

```bash
# Prefer WebP if supported
export PREFER_WEBP=1

# 16:9 landing hero background
./nano_banana_generate.sh \
  "Modern abstract gradient hero background, soft shapes, subtle texture, no text, no logos, no watermark" \
  hero_home 2K 16:9

# 9:16 onboarding illustration (mobile)
./nano_banana_generate.sh \
  "Flat vector illustration, rounded shapes, pastel palette. Person organizing tasks on a phone. No text, no logos, no watermark" \
  onboarding_01 1K 9:16

# If the model returns WebP, you'll get .webp; otherwise .png/.jpg/etc.
ls -1 hero_home.* onboarding_01.*
```

---

## Prompting playbook (consistency for an entire app)

### 1) Pick a style anchor (reuse everywhere)

Choose ONE:

- Flat vector: "Flat vector illustration, rounded shapes, consistent line weight, soft shadows, pastel palette."
- 3D: "Minimal 3D render, soft studio lighting, clean gradients, slightly playful proportions."
- Photo: "High-quality stock photo look, natural lighting, shallow depth of field, tasteful color grading."

### 2) Use component templates

- Hero: "{STYLE}. Wide hero background for {theme}. Leave negative space for UI overlay. No text, no logos, no watermark."
- Card: "{STYLE}. Thumbnail of {subject}. Centered composition. Simple background. No text, no logos, no watermark."
- Avatar: "{STYLE}. Portrait placeholder. Neutral background. No text, no logos, no watermark."
- Empty state: "{STYLE}. Empty state illustration: {metaphor}. Friendly and simple. No text, no logos, no watermark."

### 3) Always include constraints

Add: "no text, no logos, no watermark" to prevent accidental readable text.

---

## Batch generation (CSV)

Create `placeholders.csv`:

```csv
base,prompt,imageSize,aspectRatio
hero_home,Modern abstract gradient background; no text; no logos; no watermark,2K,16:9
card_01,Flat vector illustration of a bicycle on a simple background; no text; no logos; no watermark,1K,4:3
avatar_01,Studio-lit portrait photo placeholder; neutral background; no text; no logos; no watermark,1K,1:1
```

Batch runner:

```bash
#!/usr/bin/env bash
set -euo pipefail
CSV="${1:-placeholders.csv}"

export PREFER_WEBP="${PREFER_WEBP:-1}"

tail -n +2 "$CSV" | while IFS=',' read -r base prompt imageSize aspectRatio; do
  prompt="${prompt%\"}"; prompt="${prompt#\"}"
  echo "Generating ${base} ..."
  ./nano_banana_generate.sh "$prompt" "$base" "$imageSize" "$aspectRatio"
done
```

---

## Notes on WebP support

- This skill **saves `.webp` only when the API returns `image/webp`** in the response.
- If the API/model returns PNG/JPEG instead, the script writes that format and uses the matching extension.
- `PREFER_WEBP=1` will *attempt* to request WebP via `imageConfig.outputMimeType`. If your endpoint doesn't support that field, the script retries automatically without it.

---

## Troubleshooting

- 400 invalid JSON: avoid trailing commas; prefer the `jq -n` request builder above.
- 403: API key permissions/billing/project issues.
- 429: rate limiting; retry with backoff and reduce batch size.
- "No image returned": inspect `response.json` for an error payload.
- "Wrote .png but I wanted .webp": the model/API returned PNG for that request; try simplifying the prompt or re-run. The script will only emit `.webp` when Nano Banana actually returns WebP.
