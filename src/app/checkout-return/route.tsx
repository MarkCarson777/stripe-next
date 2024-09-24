// Next
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
// Third party
import Stripe from "stripe";

// Fetch the Stripe secret key from environment variables and initialize the Stripe instance.
const apiKey = process.env.STRIPE_SECRET_KEY as string;
const stripe = new Stripe(apiKey);

// Define the GET request handler.
export const GET = async (request: NextRequest) => {
  // Extract the search params from the incoming request URL.
  const { searchParams } = new URL(request.url);

  // Retrieve the session id from the search params.
  const stripeSessionId = searchParams.get("session_id");

  // If no session id is found, redirect the user to the home page.
  if (!stripeSessionId) {
    return redirect("/");
  }

  // Retrieve the session details from the Stripe API using the session id.
  const session = await stripe.checkout.sessions.retrieve(stripeSessionId);

  // If the session is complete, redirect the user to the success page.
  if (session.status === "complete") {
    return redirect("/checkout/success");
  }

  // If the session is open, redirect the user to the checkout page.
  if (session.status === "open") {
    return redirect("/checkout");
  }

  // If the session is not complete or open, redirect the user to the home page.
  return redirect("/");
};
