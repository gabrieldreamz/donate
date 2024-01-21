import { ContactEmailTemplate } from "@components/mails/ContactEmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email } = await req.json();
  if (!email) throw new Error("Invalid email");

  try {
    const data = await resend.emails.send({
      from: "AmorDivina <support@amordivina.org>",
      to: [email],
      subject: "Thank you for contacting us",
      react: ContactEmailTemplate({ firstName: "John" }),
    });

    return new Response({ status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 401,
    });
  }
}