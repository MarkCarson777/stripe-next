import { CheckoutForm } from "@/components/CheckoutForm";

export default function Page() {
  const priceId = "price_1JkZ5v2eZvKYlo2C5J9J9Q8v";

  return (
    <main>
      <div className="max-w-screen-lg mx-auto my-8">
        <CheckoutForm priceId={priceId} />
      </div>
    </main>
  );
}
