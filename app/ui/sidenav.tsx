import Link from "next/link";

export default function SideNav() {
  return (
    <aside className="w-48 h-screen fixed top-0 left-0 p-4 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-2">Navigation</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="block text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="block text-blue-600 hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/technologies" className="block text-blue-600 hover:underline">
            Technologies
          </Link>
        </li>
      </ul>
    </aside>
  );
}
