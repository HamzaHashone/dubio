# EmailJS Setup for Dubio Waitlist

## Overview
The waitlist functionality in the HeroSection component uses EmailJS to send emails when users sign up for the waitlist.

## Setup Instructions

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account

### 2. Configure Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Add a new service (Gmail, Outlook, etc.)
3. Note down the Service ID

### 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Create a new template with the following variables:
   - `{{user_email}}` - The user's email address
   - `{{to_name}}` - Recipient name (Dubio Team)
   - `{{from_name}}` - Sender name (user's email)
   - `{{message}}` - Custom message about waitlist signup

Example template:
```
Subject: New Waitlist Signup - Dubio

Dear {{to_name}},

A new user has joined the Dubio waitlist:

Email: {{user_email}}
Message: {{message}}

Best regards,
Dubio Waitlist System
```

### 4. Get Public Key
1. Go to "Account" → "General" in EmailJS dashboard
2. Copy your Public Key

### 5. Environment Variables
Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

### 6. Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to the homepage
3. Enter an email in the waitlist form
4. Click the animated button to submit
5. Check for success/error messages

## Security Notes
- EmailJS public key is safe to expose in frontend code
- The service will only work with domains you specify in EmailJS dashboard
- Consider adding rate limiting for production use

## Troubleshooting
- Make sure all environment variables are correctly set
- Verify that your domain is authorized in EmailJS dashboard
- Check browser console for any errors
- Ensure the email service is properly configured in EmailJS 