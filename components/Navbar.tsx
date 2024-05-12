import { navBar } from "@/constant/navbar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 z-50 shadow-lg bg-slate-900/50 text-white fixed top-0  items-center  w-full flex  justify-around">
      <div>
        <Link href={`#`}>
          <h2>Ahmed Elnagar</h2>
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        {navBar.map((nav) => (
          <Link
          key={nav}
            href={`#${nav}`}
            className={`mx-3 ${
              nav === "Contact"
                ? " font-extrabold px-5 p-1 bg-yellow-500 rounded-full"
                : "text-white"
            }`}
          >
            {nav}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
