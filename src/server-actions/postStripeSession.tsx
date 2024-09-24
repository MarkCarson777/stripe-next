// Indicates that this file contains code to be executed on the server side
"use server";

import { Stripe } from "stripe";

// This key is required to authenticate requests with the Stripe API
const apiKey = process.env.STRIPE_SECRET_KEY as string;
// Initializes a new instance of the Stripe SDK with the provided API key
// allowing interaction with Stripe's services.
const stripe = new Stripe(apiKey);

type NewSessionProps = {
  priceId: string;
};

export const postStripeSession = async ({ priceId }: NewSessionProps) => {
  // Defines the URL to which the user will be redirected after completing or canceling the payment.
  const returnUrl =
    "http://localhost:3000/checkout-return?session_id={CHECKOUT_SESSION_ID}";
  // Calls the Stripe API to create a new checkout session.
  // The session is configured with the line item (product) and other settings.
  const session = await stripe.checkout.sessions.create({
    // Specifies that the checkout session should be embedded in an iframe.
    ui_mode: "embedded",
    line_items: [
      {
        // The Stripe price ID associated with the product the user is purchasing.
        price: priceId,
        // Specifies the quantity of the product being purchased.
        quantity: 1,
      },
    ],
    // The mode of payment for this session. "payment" means it is a one-time payment.
    mode: "payment",
    // The URL to which the user will be redirected after payment.
    return_url: returnUrl,
  });
  // Checks if the `client_secret` is present in the session. If not, it throws an error.
  if (!session.client_secret)
    throw new Error("Error initiating Stripe session");
  // Returns the client secret for the created session, which will be used by the front-end for further payment processing.
  return {
    clientSecret: session.client_secret,
  };
};
