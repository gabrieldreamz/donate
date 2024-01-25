import connectMongoDB from "@libs/mongodb";
import ContactUs from "@models/Contact";
import sendEmail from "@utils/SendEmail";
import BackendContactSchema from "@validations/backendContactValidation";

export async function POST(req: Request) {
  try {
    const contactData = await req.json();

    if (!(await BackendContactSchema.isValid(contactData)))
      return new Response(JSON.stringify({ message: "Invalid request body" }), {
        status: 400,
      });

    await connectMongoDB();
    const createContact = await ContactUs.create(contactData);
    console.log(createContact);

    await sendEmail(
      contactData.email,
      "https://amordivina.org/api/emails/contact"
    );

    return new Response(
      JSON.stringify({
        message: "Thank you for contacting us",
        status: 200,
      })
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
