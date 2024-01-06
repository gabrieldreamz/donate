export async function POST() {
  try {
    return Response.json({ message: "Welcome sir" });
  } catch (error) {
    return Response.json({ error });
  }
}
