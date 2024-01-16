// import { EmailTemplate } from "@components/mails/ResendEmailTemplate";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   const { email } = await req.json();

//   if (!email) throw new Error("Invalid email");

//   try {
//     const data = await resend.emails.send({
//       from: "Acme <info@kindripple.com>",
//       to: [email],
//       subject: "the",
//       react: EmailTemplate({ firstName: "John" }),
//     });

//     return new Response(JSON.stringify(data), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 401,
//     });
//   }
// }
