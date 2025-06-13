import Footer from "@/components/footer/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center">
        <Image
          src="/neurodivergent-techies/logo.jpg"
          alt="Neurodivergent techies"
          width={400}
          height={38}
          priority
        />

        <Link
          href="/code-of-conduct"
          className="px-4 py-2 bg-gray-50 text-black rounded hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 display-block"
        >
          Code of conduct
        </Link>
        <Link
          href="/user-guide"
          className="px-4 py-2 bg-gray-50 text-black rounded hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 display-block"
        >
          User Guide
        </Link>
      </main>
      <Footer />
    </div>
  );
}
