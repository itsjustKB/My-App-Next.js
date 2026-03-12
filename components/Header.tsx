import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-3xl mx-auto px-4 flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">Code Club</Link>
        </h1>
      </div>
    </header>
  );
}

