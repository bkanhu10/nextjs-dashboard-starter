"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MiscLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="mt-20 flex flex-col items-start justify-items-start px-4 py-4 md:flex-row md:px-20 lg:flex-row lg:gap-20 lg:px-40">
      <aside className="w-52">
        <ul className="space-y-4">
          <li>
            <Link
              href="/profile"
              alt="Link to profile Page"
              className={`${pathname === "/profile" ? "bg-slate-200 hover:bg-brand-950/20" : ""} inline-block w-full rounded-md px-3 py-3 text-sm font-medium text-brand-950 transition duration-300 focus:outline-none focus:ring-2 focus:ring-brand-950 focus:ring-offset-2`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              alt="Link to settings Page"
              className={`${pathname === "/settings" ? "bg-slate-200 hover:bg-brand-950/20" : ""} inline-block w-full rounded-md px-3 py-3 text-sm font-medium text-brand-950 transition duration-300 focus:outline-none focus:ring-2 focus:ring-brand-950 focus:ring-offset-2`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </aside>
      <main>{children}</main>
    </div>
  );
}
