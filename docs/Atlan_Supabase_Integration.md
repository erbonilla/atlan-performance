# Atlan Performance | Supabase Integration Guide

**Version:** 1.0  
**Date:** January 2026  
**Purpose:** Guide for integrating and using Supabase for the Atlan Performance PWA.

---

## Overview

This project uses **Supabase** as the backend service for:
- Course Registrations
- User Authentication (future)
- Analytics logging (future)

We interact with Supabase via the client library `@supabase/supabase-js`.

---

## 1. Setup & Configuration

### 1.1 Install Dependencies

The project requires the Supabase client library:

```bash
npm install @supabase/supabase-js
```

### 1.2 Environment Variables

Add the following keys to your `.env` (local) and production environment variables.
**NEVER commit these keys to version control.**

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://erdhekfpqseqtlwkhnfp.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

> **Note:** The `ANON_KEY` is safe to expose in the browser (client-side), but you should still keep it in environment variables for better management.

---

## 2. Client Initialization

Create a singleton instance of the Supabase client to be used across the app.

**File:** `src/utils/supabaseClient.js`

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

---

## 3. Usage: Course Registration

### 3.1 Database Schema (`course_registrations`)

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary Key (auto-generated) |
| `created_at` | timestamptz | Timestamp (auto-generated) |
| `full_name` | text | Athlete's full name |
| `identity_card` | text | Govt ID / Passport |
| `birthday` | date | Date of birth |
| `email` | text | Contact email |
| `phone_number` | text | Contact phone |
| `course_level` | text | Selected plan (e.g., 'Shark') |
| `preferred_schedules` | text[] | Array of selected times |
| `preferred_contact_method` | text | e.g., 'WhatsApp' |

### 3.2 Submitting Data

```javascript
import { supabase } from '@/utils/supabaseClient';

const submitRegistration = async (formData) => {
  const { data, error } = await supabase
    .from('course_registrations')
    .insert([
      {
        full_name: formData.fullName,
        identity_card: formData.idNumber,
        birthday: formData.birthday, // YYYY-MM-DD
        email: formData.email,
        phone_number: formData.phoneNumber,
        course_level: formData.selectedCourse,
        preferred_schedules: formData.selectedSchedules, // Array
        preferred_contact_method: formData.contactMethod
      },
    ]);

  if (error) {
    console.error('Error submitting registration:', error);
    throw error;
  }

  return data;
};
```

---

## 4. Security & RLS

Row Level Security (RLS) is enabled on the `course_registrations` table.

- **INSERT:** Public (anon) access is allowed for creating new registrations.
- **SELECT/UPDATE/DELETE:** Restricted to authenticated service roles or specific admin users only.

---

## 5. Troubleshooting (MCP)

You can use the **Model Context Protocol (MCP)** tools to debug Supabase issues directly from your AI agent context:

- `list_projects`: Check if the project is active.
- `list_tables`: Verify schema definitions.
- `execute_sql`: Run diagnostic queries (use with caution).
