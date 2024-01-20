import got from "got";

export async function POST(req: Request) {
  try {
    const { transactionsID } = await req.json();
    const data = await got
      .get(
        `https://api.flutterwave.com/v3/transactions/:${transactionsID}/verify`,
        {
          headers: {
            Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
          },
        }
      )
      .json();

    console.log(data);

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ message: "There was an err" + error.message }),
      { status: 500 }
    );
  }
}
