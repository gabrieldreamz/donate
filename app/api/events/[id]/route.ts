import connectMongoDB from "@libs/mongodb";
import Events from "@models/Events";

export async function GET(req: Request, { params }: { params: any }) {
  try {
    const { id } = params;

    if (!id) throw new Error("Invalid ID");
    await connectMongoDB();
    const event = await Events.findOne({ _id: id });

    return new Response(JSON.stringify({ data: event }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
}
