import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-lg mx-auto my-8">
        <h1 className="font-bold text-xl">Balloon animals for sale</h1>
        <p>Quick and time-saving. Perfect for lazy clowns everywhere.</p>
        <section className="flex flex-col my-4">
          <div className="w-fit">
            <Image
              src="https://images.unsplash.com/photo-1519658493417-b687d62a3111?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt="Blue Dog"
              height={300}
              width={200}
            />
            <p className="my-2">Blue dog.</p>
            <Link className="hover:underline font-extrabold" href="/checkout">
              👉 Buy Now! 👈
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
