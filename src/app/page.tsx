// Next
import Image from "next/image";
import Link from "next/link";
// Public images
import english from "/public/images/english.svg";
import facebook from "/public/images/facebook.svg";
import instagram from "/public/images/instagram.svg";
import menu from "/public/images/bars-solid.svg";
import spanish from "/public/images/spanish.svg";
import stripe from "/public/images/stripe.svg";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header>
        <nav className="sticky top-0 z-10 grid grid-cols-3 items-center border-b-2 border-[#15233c] bg-white px-4 py-2">
          <button className="w-fit font-semibold text-[#15233c] opacity-0 hover:scale-105 hover:cursor-pointer lg:opacity-100">
            menu
          </button>
          <Image
            className="mx-auto"
            src={stripe}
            alt="Stripe payment logo"
            width={64}
            height={64}
            priority
          />
          <div className="ml-auto flex space-x-4">
            <button aria-label="Toggle menu" className="lg:hidden">
              <Image src={menu} alt="Menu" width={20} height={20} priority />
            </button>
            <button className="hidden font-semibold text-[#15233c] hover:scale-105 hover:cursor-pointer lg:block">
              search
            </button>
            <div className="hidden items-center space-x-1 lg:flex">
              <button className="font-semibold text-[#15233c] hover:scale-105 hover:cursor-pointer">
                cart
              </button>
              <span className="font-normal">[2]</span>
            </div>
          </div>
        </nav>
      </header>
      <main className="grid flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-2">
        <div className="relative h-96 lg:h-full">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Skeleton print t-shirt"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col p-6 lg:w-1/2">
          <p className="mb-6 text-xs font-extralight uppercase">Home / Tops</p>
          <p className="mb-2 text-2xl font-semibold">Skeleton Print T-Shirt</p>
          <p className="text-sm font-extralight">$100</p>
          <div className="my-4 flex items-center space-x-6">
            <div className="space-x-1 py-2">
              <span className="text-sm font-extralight uppercase">Color:</span>
              <span className="mr-2 text-sm font-semibold">Black</span>
            </div>
            <div className="flex space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-black bg-white hover:cursor-pointer">
                <div className="h-4 w-4 rounded-full bg-black"></div>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-black bg-white hover:cursor-pointer hover:border-2">
                <div className="h-4 w-4 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>
          <div className="mb-2 flex flex-col space-y-1">
            <p className="text-sm font-extralight uppercase">Size</p>
            <div className="grid grid-cols-6 items-center gap-1 text-center text-sm [&>*]:bg-pink-100 [&>*]:px-2 [&>*]:py-1">
              <button
                className="hover:cursor-pointer hover:bg-pink-200"
                aria-label="Select size XS"
              >
                xs
              </button>
              <button
                className="hover:cursor-pointer hover:bg-pink-200"
                aria-label="Select size XS"
              >
                s
              </button>
              <button
                className="hover:cursor-pointer hover:bg-pink-200"
                aria-label="Select size XS"
              >
                m
              </button>
              <button
                className="hover:cursor-pointer hover:bg-pink-200"
                aria-label="Select size XS"
              >
                l
              </button>
              <button
                className="hover:cursor-pointer hover:bg-pink-200"
                aria-label="Select size XS"
              >
                xl
              </button>
              <button
                className="hover:cursor-pointer hover:bg-pink-200"
                aria-label="Select size XS"
              >
                xxl
              </button>
            </div>
            <Link
              className="w-full rounded bg-pink-100 py-2 text-center text-sm font-semibold hover:bg-pink-200"
              href="/checkout"
            >
              Buy Now
            </Link>
          </div>
          <div className="mb-4 mt-6 flex flex-1 flex-col justify-between text-sm font-extralight uppercase lg:mb-0 lg:mt-0">
            <a className="underline hover:cursor-pointer hover:no-underline">
              {`What\'s my size?`}
            </a>
            <div className="flex flex-col">
              <a className="underline hover:cursor-pointer hover:no-underline">
                Product details
              </a>
              <a className="underline hover:cursor-pointer hover:no-underline">
                Size & fit
              </a>
              <a className="underline hover:cursor-pointer hover:no-underline">
                Free delivery & easy returns
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col items-center justify-between space-y-8 border-t-2 border-[#15233c] bg-white px-4 py-12 lg:flex-row lg:space-y-0 lg:py-2">
        <div className="flex space-x-2">
          <Image
            className="rounded hover:scale-105 hover:cursor-pointer"
            alt="Select Spanish language"
            src={spanish}
            width={24}
            height={24}
          />
          <Image
            className="rounded hover:scale-105 hover:cursor-pointer"
            alt="select English language"
            src={english}
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col text-center text-xs lg:flex-row lg:space-x-4">
          <Link href="#">Payment & Shipping</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Cancellation</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy</Link>
        </div>
        <div className="flex space-x-2">
          <Link href="#">
            <Image
              alt="Instagram social media"
              src={instagram}
              width={20}
              height={20}
            />
          </Link>
          <Link href="#">
            <Image
              alt="Facebook social media"
              src={facebook}
              width={20}
              height={20}
            />
          </Link>
        </div>
      </footer>
    </div>
  );
}
