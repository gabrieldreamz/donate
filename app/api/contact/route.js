import connectMongoDB from "@libs/mongodb";
import ContactUs from "@models/Contact";
import BackendContactSchema from "@validations/backendContactValidation";

import { ContactEmailTemplate } from "@components/mails/ContactEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const contactData = await req.json();

    if (!(await BackendContactSchema.isValid(contactData)))
      return new Response(JSON.stringify({ message: "Invalid request body" }), {
        status: 400,
      });

    await connectMongoDB();
    await ContactUs.create(contactData);

    await resend.emails.send({
      from: "AmorDivina <support@amordivina.org>",
      to: [contactData.email],
      subject: "Thank you for contacting us",
      react: ContactEmailTemplate(),
    });

    return new Response(
      JSON.stringify({
        message: "Thank you for contacting us",
        status: 200,
      })
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
