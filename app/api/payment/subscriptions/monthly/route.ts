import got from "got";
import { v4 as uuidv4 } from "uuid";

const configData = {
  headers: {
    Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
  },
  json: {
    tx_ref: uuidv4(),
    amount: "500",
    currency: "USD",
    redirect_url: "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
    payment_plan: 115025,
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "support@amordivina.com",
      name: "Gabriel dream",
    },
    payment_options: "card",
    customizations: {
      title: "Amor Divina",
      logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png",
    },
    "3DSecure": true, // Enable 3-D Secure authentication
  },
};

export async function POST(req: Request) {
  try {
    const data = await got
      .post("https://api.flutterwave.com/v3/payments", configData)
      .json();

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error: any) {
    console.log(error.message);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
