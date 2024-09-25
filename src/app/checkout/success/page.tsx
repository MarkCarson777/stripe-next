// Next
import Image from "next/image";
import Link from "next/link";
// Public images
import check from "/public/images/check.svg";
import stripe from "/public/images/stripe.svg";

export default function Page() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-center bg-pink-100">
      <section className="flex h-full w-screen flex-col items-center overflow-clip bg-white shadow lg:h-1/2 lg:w-1/3">
        <header className="w-full border-b-2 border-[#15233c] py-2">
          <Image
            className="mx-auto"
            src={stripe}
            alt="Stripe payment logo"
            width={64}
            height={64}
            priority
          />
        </header>
        <article
          className="flex w-1/2 flex-1 flex-col items-center justify-center space-y-6"
          role="article"
          aria-labelledby="success-heading"
        >
          <Image src={check} alt="Success icon" width={56} height={56} />
          <div className="space-y-1 text-center">
            <h1 id="success-heading" className="text-xl">
              Thank you for ordering
            </h1>
            <p className="text-sm font-extralight">
              Your payment has been successful
            </p>
          </div>
          <Link
            className="w-3/4 rounded bg-pink-100 p-2 text-center text-sm font-semibold hover:bg-pink-200"
            href="/"
            aria-label="Continue shopping and return to the checkout page"
          >
            Continue shopping
          </Link>
        </article>
      </section>
    </main>
  );
}
