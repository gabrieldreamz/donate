import Events from "@models/Events";
import EventsSchema from "@validations/Events";
import connectMongoDB from "@libs/mongodb";

export async function POST(req: Request) {
  try {
    const eventData = await req.json();

    if (!(await EventsSchema.isValid(eventData)))
      return new Response(JSON.stringify({ message: "Invalid Fields" }), {
        status: 400,
      });

    await connectMongoDB();
    await Events.create(eventData);

    return new Response(JSON.stringify({ message: "Post Created" }), {
      status: 201,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const searchQuery = url.searchParams;
    const limitValue = parseInt(searchQuery.get("limit") as string);

    if (!limitValue) throw new Error("Missing limit field");

    await connectMongoDB();
    const data = await Events.find().limit(limitValue);

    return new Response(JSON.stringify({ data }), {
      status: 201,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
    });
  }
}
