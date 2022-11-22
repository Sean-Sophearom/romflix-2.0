import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="box flex items-center justify-between border-b border-gray-200">
      <Link href="/" className="text-lg font-medium">
        Logo
      </Link>
      <ul className="flex gap-8">
        <li className="hover:underline hover:text-gray-500">
          <Link href="/movies">movies</Link>
        </li>
        <li className="hover:underline hover:text-gray-500">
          <Link href="/about">about</Link>
        </li>
        <li className="hover:underline hover:text-gray-500">
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;