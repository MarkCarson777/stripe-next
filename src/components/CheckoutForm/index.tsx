"use client";

// React
import { useCallback } from "react";
// Third party
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
// Server actions
import { postStripeSession } from "@/server-actions/postStripeSession";

type CheckoutFormProps = {
  priceId: string;
};

// Initialising Stripe with the public API key using environment variables.
// This initialises the Stripe instance for client-side use.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE as string,
);

export function CheckoutForm(props: CheckoutFormProps) {
  const { priceId } = props;

  // Defining a memoized function `fetchClientSecret` using useCallback. This function is responsible for getting the client secret
  // from the server by calling the postStripeSession function and passing the `priceId`. The client secret is needed for processing the payment.
  const fetchClientSecret = useCallback(async () => {
    const stripeResponse = await postStripeSession({ priceId });
    return stripeResponse.clientSecret;
  }, [priceId]);

  // Creating an options object that includes the `fetchClientSecret` function to pass to the EmbeddedCheckoutProvider.
  const options = { fetchClientSecret };

  // The EmbeddedCheckoutProvider is a wrapper that initialises Stripe with the provided options.
  // The EmbeddedCheckout component renders the Stripe checkout form within the application.
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
