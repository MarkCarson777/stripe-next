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

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE as string
);

export function CheckoutForm(props: CheckoutFormProps) {
  const { priceId } = props;

  const fetchClientSecret = useCallback(async () => {
    const stripeResponse = await postStripeSession({ priceId });
    return stripeResponse.clientSecret;
  }, [priceId]);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
