export default async function sendEmail(email: string) {
  try {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    console.log("success");
  } catch (error: any) {
    console.error(error.message);
  }
}
