import Image from "next/image";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Footer from "@/components/footer/footer";

export default function Home() {
  const markdownFilePath = path.join(process.cwd(), "src/content/code-of-conduct.md");
  const markdownContent = fs.readFileSync(markdownFilePath, "utf-8");

  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center justify-center">
        
        <Link href="/"><Image
          src="/neurodivergent-techies/logo.jpg"
          alt="Neurodivergent techies"
          width={200}
          height={38}
          priority
          className="mt-10"
        /></Link>

        <div className="mb-10 mx-10 code-of-conduct max-w-2xl bg-white text-gray-900 p-4 rounded-lg shadow-md mt-8">
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
