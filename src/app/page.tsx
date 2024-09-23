import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="h-16 bg-blue-500 flex items-center">StripeStore</nav>
      <main className="container mx-auto py-10 border border-red-500">
        <h1 className="font-bold text-xl">New listings</h1>
        <section className="border border-green-500">
          <Image
            src="https://images.unsplash.com/photo-1519658493417-b687d62a3111?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blue Dog"
            height={300}
            width={200}
          />
          <p className="my-2">Blue dog.</p>
          <Link
            className="bg-blue-500 text-white p-4 rounded hover:bg-blue-600"
            href="/checkout"
          >
            Buy Now
          </Link>
        </section>
      </main>
    </>
  );
}
