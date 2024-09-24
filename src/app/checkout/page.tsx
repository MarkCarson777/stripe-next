import { CheckoutForm } from "@/components/CheckoutForm";

export default function Page() {
  const priceId = "price_1Q18VdLxzZVCInv4C9f5Yezd";

  return (
    <main className="mx-auto my-8 max-w-screen-lg">
      <CheckoutForm priceId={priceId} />
    </main>
  );
}
