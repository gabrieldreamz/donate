export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) throw new Error("Invalid email");

    return Response.json({ status: 201, message: "Email Created" });
  } catch (error) {
    return Response.json({ error });
  }
}
