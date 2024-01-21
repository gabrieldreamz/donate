import connectMongoDB from "@libs/mongodb";
import Customers from "@models/Customers";
import customerSchema from "@validations/Customers";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("request just came in.....");

    if (!(await customerSchema.isValid(data))) {
      return new Response(
        JSON.stringify({ message: "You have missing fields" }),
        {
          status: 400,
        }
      );
    }

    await connectMongoDB();
    await Customers.create(data);
    return new Response(
      JSON.stringify({
        message: "customer added to the database",
        status: 201,
      })
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
