"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <header className="bg-primary text-primary-foreground fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <Link href="/" className="text-xl font-bold">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white focus:outline-none z-60"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <div
          className={`
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
            lg:translate-x-0 
            fixed 
            lg:static 
            top-0 
            right-0 
            w-full 
            h-full 
            lg:h-auto 
            bg-primary 
            lg:bg-transparent 
            transition-transform 
            duration-300 
            ease-in-out 
            z-50 
            lg:z-auto 
            flex 
            flex-col 
            lg:flex-row 
            justify-center 
            items-center
          `}
        >
          <ul className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 items-center">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/products", label: "Products" },
              { href: "/samples", label: "Samples" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href} className="w-full lg:w-auto text-center">
                <Link
                  href={link.href}
                  className="block py-3 lg:py-2 hover:underline"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}