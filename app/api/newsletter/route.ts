import connectMongoDB from "@libs/mongodb";
import NewsLetterEmail from "@models/NewsLetterEmail";
import newsLetterEmailSchema from "@validations/NewsLetterEmail";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const isValid = await newsLetterEmailSchema.isValid({ email });
    if (!isValid) throw new Error("Invalid email");

    await connectMongoDB();

    const emailExists = await NewsLetterEmail.findOne({ email });
    if (emailExists) throw new Error("You are already subcribed");

    await NewsLetterEmail.create({ email });

    return new Response(
      JSON.stringify({ status: 200, message: "Email Created" }),
      { status: 200 }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}
