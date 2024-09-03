// utils/email-service.ts
import emailjs from "emailjs-com";

interface EmailData {
  name: string;
  email: string;
  address: string;
  address2?: string;
  zip: string;
  phone: string;
  summary?: string;
  cartDetails: string;
  totalPrice: string;
}

export const sendEmail = async (emailData: EmailData) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICEID as string, // Service ID from your env
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string, // Template ID from your env
      {
        ...emailData,
        admin_email: "awanjunaid454@gmail.com", // Admin email (recipient)
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY as string // Public key from your env
    );
    return response;
  } catch (error) {
    console.error("Failed to send email.", error);
    throw error;
  }
};
