import Link from "next/link";

export default function NavLinks() {
  return (
    <nav className="flex space-x-4">
      <Link href="/" className="text-blue-600 hover:underline">
        Home
      </Link>
      <Link href="/dashboard" className="text-blue-600 hover:underline">
        Dashboard
      </Link>
      <Link href="/technologies" className="text-blue-600 hover:underline">
        Technologies
      </Link>
    </nav>
  );
}
