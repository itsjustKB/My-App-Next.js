import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <div className="backgorund-color: to-blue-600 width:360px height:360px">
        <h1 className="text-3xl font-bold mb-4">LEARN TO CODE WITH CODE CLUB!</h1>
        <p className="text-lg">Our projects have step-by-step instructions to teach you how to create games, 
                        animations, and much more. Choose from hundreds of options in up to 30 languages.</p>
      </div>
    </main>
  );
}
