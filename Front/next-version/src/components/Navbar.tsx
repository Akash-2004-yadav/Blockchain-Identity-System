"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl bg-white/10
        border-b border-white/20
        shadow-[0px_6px_18px_rgba(0,0,0,0.20)]
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        {/* LOGO / TITLE */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          Digital <span className="text-blue-300">Identity</span>
        </h1>

        {/* NAV LINKS */}
        <div className="flex gap-10 text-lg">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/verify">Verify</NavItem>
          <NavItem href="/dashboard">My Certificates</NavItem>
        </div>
      </div>
    </motion.nav>
  );
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
        relative transition duration-200 hover:text-blue-300
        font-medium
      "
    >
      {children}
      <span className="
        absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-300 transition-all duration-300
        hover:w-full
      "></span>
    </Link>
  );
}
