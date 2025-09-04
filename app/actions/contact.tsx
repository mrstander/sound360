"use server"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const eventType = formData.get("eventType") as string
  const message = formData.get("message") as string

  // Get selected services
  const services = []
  if (formData.get("audio")) services.push("Professional Audio")
  if (formData.get("lighting")) services.push("Stage Lighting")
  if (formData.get("visual")) services.push("Visual Solutions")
  if (formData.get("production")) services.push("Event Production")

  // Create email content
  const emailContent = `
New Contact Form Submission - Sound360

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || "Not provided"}

Event Details:
- Event Type: ${eventType || "Not specified"}
- Services Needed: ${services.length > 0 ? services.join(", ") : "Not specified"}

Message:
${message}

---
Submitted from Sound360 website contact form
  `.trim()

  try {
    // Using a simple email service API (you can replace this with your preferred service)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: re_Citkc9Zs_26oP8EG3bnL7cmucjwYcqcpo,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Sound360 Website <noreply@sound360.co.za>",
        to: ["mrgavinstander@gmail.com"],
        reply_to: email,
        subject: `New Contact Form Submission - ${firstName} ${lastName}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a365d; border-bottom: 2px solid #3182ce; padding-bottom: 10px;">
              New Contact Form Submission - Sound360
            </h2>
            
            <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d3748; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            </div>

            <div style="background: #edf2f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d3748; margin-top: 0;">Event Details</h3>
              <p><strong>Event Type:</strong> ${eventType || "Not specified"}</p>
              <p><strong>Services Needed:</strong> ${services.length > 0 ? services.join(", ") : "Not specified"}</p>
            </div>

            <div style="background: #f0fff4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d3748; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 14px;">
              <p>Submitted from Sound360 website contact form</p>
              <p>Reply directly to this email to respond to ${firstName}</p>
            </div>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. We'll get back to you within 2 hours.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again or contact us directly at info@sound360.co.za",
    }
  }
}
