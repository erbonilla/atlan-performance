# Atlan Performance | Forms & Email Flow Spec

**Version:** 1.0  
**Date:** December 2025  
**Owner:** Edgar Bonilla  

This document defines the **structure, validation, and email flows** for all forms in the Atlan Performance MVP.

Forms in scope:

1. Course Subscription / Contact form
2. Newsletter signup

---

## 1. Shared Principles

- All forms must be **accessible** (labels, ARIA, focus states)
- Real-time validation on **blur**, full validation on **submit**
- Clear error messages, no shaming (“life happens” mindset)
- Successful submissions generate GA4 events
- Back-end should always receive: timestamp, language, page path

---

## 2. Contact Us Form

**Location:** `/contact`, plus embedded CTAs from Homepage, Programs, Courses & Schedules.  
**Goal:** Capture user inquiries and program interests with quick contact alternatives.

### 2.1 Fields

| Field             | Type    | Required | Rules                                  | Notes                              |
|-------------------|---------|----------|----------------------------------------|------------------------------------|
| fullName          | text    | Yes      | min 2 words                            | placeholder: “John Doe”            |
| email             | email   | Yes      | valid email format                     | placeholder: `example@domain.com`  |
| phone             | tel     | No       | format `+506 XXXX-XXXX`                | placeholder: `+506 XXXX-XXXX`      |
| experience        | select  | Yes      | one of: beginner, intermediate, advanced | placeholder: “Select experience level...” |
| programInterest   | select  | No       | see below                              | placeholder: “Select program...”   |
| message           | textarea| No       | max 500 characters                     | show char counter; placeholder: “Tell us about your goals...” |
| acceptPolicy      | checkbox| Yes      | must be checked                        | “I accept the privacy policy”      |

### 2.2 Options Reference

- **Program of Interest:**
  - Swimming for Adults
  - Swimming for Juniors
  - Open Water
  - Triathlon (General)
  - Triathlon 70.3
  - Triathlon Ironman

### 2.3 Quick Contact (Fast Reply)
Below the form, provide two high-visibility action buttons:
- **CALL:** Triggers `tel:` link. (Phone Icon)
- **WHATSAPP:** Triggers WhatsApp chat link. (WhatsApp Icon + Green Branding)

### 2.4 Validation & Design
- **Real-time validation:** Full Name, Email, and Phone.
- **Character Counter:** Textarea must show current/max count (e.g., `0/500 characters`).
- **Submit Button:** Label "Send Message", brand color `--coral-spark`.
- **Background:** Hero-style background with swimmer imagery and dark overlay.

### 2.5 Success & Error States

- On success:
  - Show inline message above form:
    - ES: “¡Listo! Te contactaremos en 24 horas para completar tu inscripción.”  
    - EN: “All set! We’ll contact you within 24 hours to complete your registration.”
  - GA4 event: `subscribe`
- On error (network/back-end):
  - ES: “Tuvimos un problema al enviar el formulario. Intenta de nuevo en unos minutos.”  
  - EN: “We had trouble sending the form. Please try again in a few minutes.”

### 2.6 Backend Payload

Example JSON body for submission:

```json
{
  "fullName": "John Doe",
  "email": "jane@example.com",
  "phone": "+(506) 8373-1111",
  "experience": "intermediate",
  "programInterest": "open_water",
  "message": "Training for my first 70.3 in 6 months.",
  "language": "es",
  "pagePath": "/contact",
  "source": "direct",
  "timestamp": "2025-12-10T12:34:56Z"
}
```

Target: send to `erbonilla@outlook.com` (or any API relay).

---

## 3. Course Subscription Form

**Location:** `/subscribe`, plus links from Pricing/Courses page.  
**Goal:** Capture detailed enrollment data for specific training tiers.

### 3.1 Fields

| Field              | Type    | Required | Rules                                  | Notes                              |
|--------------------|---------|----------|----------------------------------------|------------------------------------|
| fullName           | text    | Yes      | min 2 words                            | placeholder: “Enter your full name” |
| identityCard       | text    | Yes      | alphanumeric                           | placeholder: “ID Number”           |
| birthday           | date    | Yes      | mm/dd/yyyy format                      |                                    |
| email              | email   | Yes      | valid email format                     | placeholder: `example@domain.com`  |
| phone              | tel     | Yes      | format `+506 XXXX-XXXX`                | placeholder: `+506 ____-____`      |
| selectedCourse     | radio   | Yes      | select one: Dolphin, Shark, Orca       | Card-style selection with icons    |
| preferredSchedules  | checkbox| Yes      | select one or more                     | Chip-style selection               |
| contactMethod      | radio   | Yes      | select one: Phone Call, WhatsApp       | Card-style selection with icons    |

### 3.2 Options Reference

- **Courses:**
  - **Dolphin:** Beginner — Water Confidence (Lifebuoy Icon)
  - **Shark:** Intermediate — Technique (Target Icon)
  - **Orca:** Advanced — Endurance (Waves Icon)
- **Schedules:**
  - Tuesday — 7:00 PM
  - Thursday — 7:00 PM
  - Saturday — 8:30 AM
  - Saturday — 9:30 AM
- **Contact Methods:**
  - Phone Call (Phone Icon)
  - WhatsApp (WhatsApp Icon)

### 3.3 Visual & UX Requirements
- **Glassmorphism:** Use translucent backgrounds with backdrop blur for cards and chips.
- **Micro-animations:** Subtle scale/elevation change on hover/selection of courses and schedules.
- **Validation:** Clear error states for all required fields; "Submit" button remains disabled or shows feedback if invalid.
- **Success State:** Redirect or show a glassmorphic success modal with contact confirmation.

---

## 4. Newsletter Signup

**Location:** Homepage footer block, maybe Programs page.

### 4.1 Fields

| Field   | Type  | Required | Rules                |
|---------|-------|----------|----------------------|
| email   | email | Yes      | standard email regex |
| name    | text  | No       | optional             |

### 4.2 Copy

- Headline:  
  - ES: “Únete al equipo”  
  - EN: “Join the squad”
- Support:  
  - ES: “Recibe tips de entrenamiento y ciencia del deporte cada semana.”  
  - EN: “Get weekly training tips and sports science insights.”
- CTA button:
  - ES: “Suscribirme”  
  - EN: “Subscribe”

### 4.3 Behavior

- On submit:
  - Validate email
  - Call email provider (e.g. Formspree, EmailJS, or custom endpoint)
  - Show success message on 2xx response
  - GA4 event `newsletter_signup` with `source_page` and `language`

---

## 5. Email Templates

### 5.1 Coach Notification (to Atlan)

**Subject (ES):** `Nuevo lead de suscripción: {{programInterest}} – {{fullName}}`  
**Subject (EN):** `New subscription lead: {{programInterest}} – {{fullName}}`

**Body fields (always include):**

- Name
- Email
- Phone
- Experience
- Program of interest (or Course tier)
- Message / Selected Schedule
- Language
- Page path and source (schedule, direct)
- Timestamp

Use a simple, readable text layout.

### 5.2 User Auto-Reply

**Subject (ES):** `¡Bienvenido a Atlan Performance!`  
**Subject (EN):** `Welcome to Atlan Performance`

**Body (ES, sketch):**

> Hola {{firstName}},  
>  
> Gracias por escribirnos. En las próximas 24 horas te contactaremos para completar tu suscripción y aclarar cualquier duda.  
>  
> Mientras tanto, puedes revisar los horarios actuales aquí: [link a horarios].  
>  
> Aguas claras y entrenos inteligentes,  
> Equipo Atlan

**Body (EN, sketch):**

> Hi {{firstName}},  
>  
> Thanks for reaching out. Within the next 24 hours we’ll contact you to complete your subscription and answer any questions.  
>  
> In the meantime, you can check our current schedule here: [link to schedule].  
>  
> Clear water, smart training,  
> Atlan Team

---

## 6. Error Handling

- If backend returns **validation error** (e.g. blocked email):
  - Show ES/EN error: “There was a problem with your data. Please review your inputs.”
- If backend returns **5xx**:
  - Show fallback as in section 2.3 and suggest alternative contact channel (email)
- If user is **offline**:
  - See `Atlan_EDGE_STATES.md` for offline behaviors
