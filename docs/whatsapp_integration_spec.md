Technical Specification: WhatsApp Contact Form IntegrationTo: Antigravity Development TeamDate: October 26, 2023Subject: Implementation of WhatsApp Redirection for Contact Form1. ObjectiveUpdate the current Contact Form submission behavior. Instead of (or in addition to) the standard backend submission, the form must construct a formatted text message and redirect the user to the WhatsApp API. This allows the site owner to receive lead inquiries directly on their WhatsApp.2. Configuration DetailsTarget WhatsApp Number: 50683731111Format: International format without symbols (Costa Rica code +506).Trigger: The action should fire upon valid form submission.Success Notification Text:"We'll get back to you soon to answer your questions and help you start your journey with Atlan.Response time: 24-48 hoursSupport hours"3. Message Structure & Data MappingThe message sent to WhatsApp should be formatted clearly using WhatsApp's text styling (bolding with asterisks) and URL-encoded line breaks.Form FieldWhatsApp Label (Bold)Required?Name*Nombre:*YesEmail*Email:*No (Conditional)Phone*Teléfono:*No (Conditional)Subject*Asunto:*No (Conditional)Message*Mensaje Adicional:*No (Conditional)Note on Localization: If the site is multi-language, ensure the "WhatsApp Label" strings are pulled from the translation files (e.g., CONTACT.FORM_NAME, CONTACT.FORM_EMAIL) as shown in the reference code.4. Implementation LogicPlease implement the following logic within the form submission handler.Key Requirements:Encoding: All user input must be wrapped in encodeURIComponent() to ensure special characters do not break the WhatsApp link.Formatting: Use %0A for line breaks and * for bold text.Conditionals: Only include optional fields (Email, Phone, Subject, Message) if the user has provided data for them.User Feedback: Display a notification (Alert or Modal) to the user with the success text before or immediately upon triggering the redirect.Target: Open the link in a new tab (_blank).Reference Implementation (TypeScript/Angular)/**
 * Generates a WhatsApp message with the contact form data and opens WhatsApp
 * * @param formData - Object containing the captured form values
 */
sendByWhatsApp(formData: ContactFormData): void {
    // 1. Configuration
    const whatsappNumber = "50683731111"; 
    
    // Define the success notification text
    const successNotification = `We'll get back to you soon to answer your questions and help you start your journey with Atlan.\n\nResponse time: 24-48 hours\nSupport hours`;

    // 2. Localization / Labels
    const requestTitle = this.translate.instant('CONTACT.REQUEST_TITLE') || 'New Contact Request';
    const defaultMsg = this.translate.instant('CONTACT.DEFAULT_MESSAGE') || 'Hello, I am interested in your services.';
    const contactDataLabel = this.translate.instant('CONTACT.MY_CONTACT_DATA') || 'Contact Details';
    
    const nameLabel = this.translate.instant('CONTACT.FORM_NAME') || 'Name';
    const emailLabel = this.translate.instant('CONTACT.FORM_EMAIL') || 'Email';
    const phoneLabel = this.translate.instant('CONTACT.FORM_PHONE') || 'Phone';
    const subjectLabel = this.translate.instant('CONTACT.FORM_SUBJECT') || 'Subject';
    const additionalMsgLabel = this.translate.instant('CONTACT.ADDITIONAL_MESSAGE') || 'Message';

    // 3. Construct Message
    let whatsappMessage = `*${requestTitle}*%0A%0A`;
    whatsappMessage += `${defaultMsg}%0A%0A`;
    whatsappMessage += `*${contactDataLabel}:*%0A`;
    
    whatsappMessage += `*${nameLabel}:* ${encodeURIComponent(formData.name)}%0A`;

    if (formData.email) {
        whatsappMessage += `*${emailLabel}:* ${encodeURIComponent(formData.email)}%0A`;
    }

    if (formData.phone) {
        whatsappMessage += `*${phoneLabel}:* ${encodeURIComponent(formData.phone)}%0A`;
    }

    if (formData.subject) {
        whatsappMessage += `%0A*${subjectLabel}:* ${encodeURIComponent(formData.subject)}%0A`;
    }

    if (formData.message) {
        whatsappMessage += `%0A*${additionalMsgLabel}:*%0A${encodeURIComponent(formData.message)}`;
    }

    // 4. Notify User
    // Use a standard alert or a custom UI modal component here
    alert(successNotification);

    // 5. Execute Redirect
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
}
5. Acceptance CriteriaUser fills out the contact form and clicks "Send".A notification/alert appears with the text: "We'll get back to you soon...".After acknowledging (or simultaneously), a new browser tab opens loading wa.me.The WhatsApp chat with +506 8373-1111 is opened.The input field is pre-filled with the formatted message including all entered details.