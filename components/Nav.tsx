"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-extrabold text-blue-600 tracking-tight">
          AgentQA
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a href="#capabilities" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">
              Capabilities
            </a>
          </li>
          <li>
            <a href="#who-its-for" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors">
              Who It&apos;s For
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-1.5 rounded-md text-sm font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-gray-700 rounded" />
          <span className="block w-6 h-0.5 bg-gray-700 rounded" />
          <span className="block w-6 h-0.5 bg-gray-700 rounded" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-4">
          <a href="#capabilities" className="text-gray-700 font-medium text-sm" onClick={() => setOpen(false)}>
            Capabilities
          </a>
          <a href="#who-its-for" className="text-gray-700 font-medium text-sm" onClick={() => setOpen(false)}>
            Who It&apos;s For
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-4 py-1.5 rounded-md text-sm font-semibold w-fit"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
