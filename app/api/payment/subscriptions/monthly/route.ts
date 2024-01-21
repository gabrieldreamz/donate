import got from "got";
import { v4 as uuidv4 } from "uuid";

const configData = (amount: string, name: string, email: string) => {
  return {
    headers: {
      Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
    },
    json: {
      tx_ref: uuidv4(),
      amount: amount,
      currency: "USD,",
      redirect_url: "https://www.amordivina.org/",
      payment_plan: 115025,
      customer: {
        email: email,
        name: name,
      },
      payment_options: "account",
      bank_transfer_options: {
        expires: 3600,
      },
      customizations: {
        title: "Amor Divina",
        logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png",
      },
      // "3DSecure": true, // Enable 3-D Secure authentication
    },
  };
};

export async function POST(req: Request) {
  try {
    const { amount, name, email } = await req.json();
    const data = await got
      .post(
        "https://api.flutterwave.com/v3/payments",
        configData(amount, name, email)
      )
      .json();

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error: any) {
    console.log(error.message);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
