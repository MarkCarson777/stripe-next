import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const apiKey = process.env.STRIPE_SECRET_KEY as string;
const stripe = new Stripe(apiKey);

export const GET = async (request: NextRequest, response: NextResponse) => {
  const { searchParams } = new URL(request.url);
  const stripeSessionId = searchParams.get("session_id");

  if (!stripeSessionId) {
    return redirect("/");
  }

  const session = await stripe.checkout.sessions.retrieve(stripeSessionId);

  if (session.status === "complete") {
    return redirect("/checkout/success");
  }

  if (session.status === "open") {
    return redirect("/checkout");
  }

  return redirect("/");
};
