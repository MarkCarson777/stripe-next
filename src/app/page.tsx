import Image from "next/image";
import Link from "next/link";

import english from "/public/images/english.svg";
import facebook from "/public/images/facebook.svg";
import instagram from "/public/images/instagram.svg";
import menu from "/public/images/bars-solid.svg";
import spanish from "/public/images/spanish.svg";
import stripe from "/public/images/stripe.svg";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <nav className="sticky top-0 z-10 grid grid-cols-3 items-center border-b-2 border-[#15233c] bg-white px-4 py-2">
        <p className="text-xl font-extrabold text-[#15233c] opacity-0 hover:scale-105 hover:cursor-pointer lg:opacity-100">
          menu
        </p>
        <Image
          className="mx-auto"
          src={stripe}
          alt="Stripe logo"
          width={96}
          height={96}
          priority
        />
        <div className="ml-auto flex space-x-4">
          <Image
            className="lg:hidden"
            src={menu}
            alt="Menu"
            width={24}
            height={24}
            priority
          />
          <p className="hidden text-xl font-extrabold text-[#15233c] hover:scale-105 hover:cursor-pointer lg:block">
            search
          </p>
          <p className="hidden text-xl font-extrabold text-[#15233c] hover:scale-105 hover:cursor-pointer lg:block">
            cart <span className="font-normal">[2]</span>
          </p>
        </div>
      </nav>
      <main className="grid flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-2">
        <div className="relative h-96 lg:h-full">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Red handbag"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col p-8 lg:w-2/3">
          <p className="pb-4 font-extralight uppercase">Home / Tops</p>
          <p className="pb-2 text-2xl font-semibold">Skeleton Print T-Shirt</p>
          <p className="pb-6 text-xl font-extralight">$100</p>
          <div className="flex items-center space-x-6">
            <div className="space-x-2">
              <span className="font-extralight uppercase">Color:</span>
              <span className="mr-2 font-semibold">Black</span>
            </div>
            <div className="flex space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white hover:cursor-pointer">
                <div className="h-4 w-4 rounded-full bg-black"></div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white hover:cursor-pointer hover:border-2">
                <div className="h-4 w-4 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>
          <p className="pb-2 font-extralight uppercase">Size</p>
          <section className="grid grid-cols-6 grid-rows-2 items-center gap-1 pb-4 text-center [&>*]:bg-pink-100 [&>*]:p-2">
            <span className="hover:cursor-pointer hover:bg-pink-200">xs</span>
            <span className="hover:cursor-pointer hover:bg-pink-200">s</span>
            <span className="hover:cursor-pointer hover:bg-pink-200">m</span>
            <span className="hover:cursor-pointer hover:bg-pink-200">l</span>
            <span className="hover:cursor-pointer hover:bg-pink-200">xl</span>
            <span className="hover:cursor-pointer hover:bg-pink-200">xxl</span>
            <Link
              className="col-span-6 rounded font-semibold hover:bg-pink-200"
              href="/checkout"
            >
              Buy Now
            </Link>
          </section>
          <div className="flex flex-1 flex-col justify-between font-extralight uppercase">
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
      <footer className="grid grid-cols-1 items-center border-t-2 border-[#15233c] bg-white px-4 py-4 lg:grid-cols-3">
        <div className="flex space-x-2">
          <Image
            className="rounded"
            alt="Spanish"
            src={spanish}
            width={24}
            height={24}
          />
          <Image
            className="rounded"
            alt="English"
            src={english}
            width={24}
            height={24}
          />
        </div>
        <div className="space-x-4 font-semibold">
          <a>Payment & Shipping</a>
          <a>Contact</a>
          <a>Cancellation</a>
          <a>Terms & Conditions</a>
          <a>Privacy</a>
        </div>
        <div className="ml-auto flex space-x-2">
          <Link href="#">
            <Image alt="Instagram" src={instagram} width={24} height={24} />
          </Link>
          <Link href="#">
            <Image alt="Facebook" src={facebook} width={24} height={24} />
          </Link>
        </div>
      </footer>
    </div>
  );
}
