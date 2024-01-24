export async function POST(req: Request) {
  try {
    const { amount, email } = await req.json();
    // Convert amount to kobo
    const amountInKobo = parseInt(amount) * 100;

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: amountInKobo,
          // currency: "USD",
          channels: ["card"],
        }),
      }
    );

    const data = await response.json();

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
