export async function POST(req: Request) {
  try {
    return Response.json({ message: "Welcome sir" });
  } catch (error) {
    return Response.json({ error });
  }
}
