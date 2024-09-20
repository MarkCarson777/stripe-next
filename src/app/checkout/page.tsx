import { CheckoutForm } from "@/components/CheckoutForm";

export default function Page() {
  const priceId = "price_1Q18VdLxzZVCInv4C9f5Yezd";

  return (
    <main>
      <div className="max-w-screen-lg mx-auto my-8">
        <CheckoutForm priceId={priceId} />
      </div>
    </main>
  );
}
