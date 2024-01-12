import connectMongoDB from "@libs/mongodb";
import ContactUs from "@models/Contact";
import BackendContactSchema from "@validations/backendContactValidation";

export async function POST(req: Request) {
  try {
    const contactData = await req.json();

    if (!(await BackendContactSchema.isValid(contactData)))
      return new Response(
        JSON.stringify({ message: "You have missing fields" }),
        {
          status: 400,
        }
      );

    await connectMongoDB();
    await ContactUs.create(contactData);

    return new Response(
      JSON.stringify({
        message: "Thank you for contacting us",
        status: 200,
      })
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
}
