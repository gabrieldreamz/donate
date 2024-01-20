export default async function sendEmail(email: string, endPoint: string) {
  try {
    const res = await fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
  } catch (error: any) {
    console.error(error.message);
  }
}
