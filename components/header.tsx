"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const navigationItems = [
    { href: "/", label: "Home" },
    { 
      href: "/worksheets", 
      label: "Worksheets",
      subItems: [
        { href: "/worksheets/music", label: "Music Mastery" },
        { href: "/worksheets/reading-writing", label: "Reading & Writing" },
        { href: "/worksheets/math", label: "Math Magic" }
      ]
    },
    { href: "/about", label: "Our Approach" },
    { href: "/age-groups", label: "Age Groups" },
    { href: "/samples", label: "Free Samples" },
    { href: "/shop", label: "Shop" }
  ];

  return (
    <header className="bg-primary text-primary-foreground fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        <Link href="/" className="text-xl font-bold">
          <Image
            src="/logo.png"
            alt="Borderless Craft"
            width={100}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

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
            {navigationItems.map((item) => (
              <li key={item.href} className="w-full lg:w-auto text-center group relative">
                <Link
                  href={item.href}
                  className="block py-3 lg:py-2 hover:underline"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
                {item.subItems && (
                  <ul className="hidden lg:group-hover:block absolute left-0 mt-2 w-48 bg-primary shadow-lg rounded-md py-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-primary-foreground/10"
                          onClick={handleLinkClick}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}