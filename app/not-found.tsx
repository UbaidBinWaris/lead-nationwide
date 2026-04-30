"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MdErrorOutline, MdHome } from "react-icons/md";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex max-w-md flex-col items-center"
      >
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-blue-primary shadow-inner">
          <MdErrorOutline size={48} />
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
          404
        </h1>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-text-primary">
          Page not found
        </h2>
        
        <p className="mt-4 text-base text-text-secondary">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 rounded-xl bg-blue-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-primary/20 transition-all hover:-translate-y-0.5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-offset-2"
          >
            <MdHome size={20} className="transition-transform group-hover:scale-110" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-text-primary transition-colors hover:text-blue-primary"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
