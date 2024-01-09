export async function POST(req: Request) {
  const { fullname, email, message, foundus, help } = await req.json();

  try {
    return Response.json({
      message: "Thank you for contacting us",
      status: 200,
      data: { fullname, email, message, foundus, help },
    });
  } catch (error) {
    return Response.json("Something went wrong");
  }
}
