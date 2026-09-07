"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiSearch, FiHeart, FiPhone, FiX } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaSearch } from "react-icons/fa";

type MenuLink = {
  label: string;
  href: string;
};

type MenuSection = {
  key: string;
  label: string;
  links: MenuLink[];
  image: {
    src: string;
    alt: string;
  };
};

const MENU_SECTIONS: MenuSection[] = [
  {
    key: "explore",
    label: "Explore",
    links: [
      { label: "The World", href: "/explore-the-world" },
      { label: "Switzerland", href: "/switzerland" },
      { label: "Cosa inspirations", href: "/cosa-inspirations" },
    ],
    image: {
      src: "/images/mega-menu/explore-baobabs.jpg",
      alt: "Avenue of the Baobabs at sunset, Madagascar",
    },
  },
  {
    key: "services",
    label: "Services",
    links: [
      { label: "Travel Designer", href: "/travel-designers" },
      { label: "Event Creators", href: "/event-creators" },
      { label: "Booking Specialist", href: "/booking-specialists" },
      { label: "Switzerland Experts", href: "/switzerland-experts" },
    ],
    image: {
      src: "/images/mega-menu/services.jpg",
      alt: "Cosa travel designer planning a bespoke itinerary",
    },
  },
  {
    key: "why-cosa",
    label: "Why Cosa",
    links: [
      { label: "Our Approach", href: "/#why-choose-cosa" },
      { label: "Conscious Travel", href: "/about-us#conscious-travel" },
      { label: "Corporate Events", href: "/corporate-events" },
    ],
    image: {
      src: "/images/mega-menu/why-cosa.jpg",
      alt: "A tailor-made Cosa journey in progress",
    },
  },
  {
    key: "about-us",
    label: "About Us",
    links: [
      { label: "Our Story", href: "/about-us" },
      { label: "Conscious travel", href: "/about-us#conscious-travel" },
      { label: "Team", href: "/our-team" },
      { label: "Career", href: "/careers" },
    ],
    image: {
      src: "/images/mega-menu/about-us.jpg",
      alt: "The Cosa team",
    },
  },
  {
    key: "contact",
    label: "Contact",
    links: [
      { label: "General Inquiries", href: "/contact" },
      { label: "Departments", href: "/contact#departments" },
    ],
    image: {
      src: "/images/mega-menu/contact.jpg",
      alt: "Get in touch with Cosa Travel",
    },
  },
];

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "FR", label: "Français" },
  { code: "DE", label: "Deutsch" },
  { code: "IT", label: "Italiano" },
];

const CURRENCIES = [
  { code: "CHF", label: "Swiss Franc" },
  { code: "EUR", label: "Euro" },
  { code: "USD", label: "US Dollar" },
  { code: "GBP", label: "British Pound" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const [previewKey, setPreviewKey] = useState(MENU_SECTIONS[0].key);

  const preview =
    MENU_SECTIONS.find((section) => section.key === previewKey) ??
    MENU_SECTIONS[0];

  // Close dropdowns and menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
    setCurrencyOpen(false);
  }, [pathname]);

  // Close menu with Escape key
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Reset menu preview when menu opens
  useEffect(() => {
    if (menuOpen) {
      setPreviewKey(MENU_SECTIONS[0].key);
    }
  }, [menuOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-8 py-7">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-8">

            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="group flex flex-col gap-[5px] transition-all duration-300"
            >
              <span className="block h-[1.5px] w-6 bg-white transition-colors duration-300 group-hover:bg-[#182D27]" />
              <span className="block h-[1.5px] w-6 bg-white transition-colors duration-300 group-hover:bg-[#182D27]" />
              <span className="block h-[1.5px] w-6 bg-white transition-colors duration-300 group-hover:bg-[#182D27]" />
            </button>

            {/* CALL US */}
           <a
  href="tel:+977981234567"
  className="group flex items-center gap-2 text-white"
>
  <FiPhone className="h-4 w-4 transition-colors duration-300 group-hover:text-[#0F3B35]" />

  <span className="relative overflow-hidden h-6 w-[140px]">
    {/* Call Us */}
    <span className="absolute left-0 top-0 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
      Call Us
    </span>

    {/* Phone Number */}
    <span className="absolute left-0 top-full whitespace-nowrap text-[#0F3B35] transition-all duration-300 group-hover:top-0">
      +977 981234567
    </span>
  </span>
</a>
          </div>

          {/* ================= COSA LOGO ================= */}
          <Link
  href="/"
  className="
    absolute left-1/2 top-1/2
    -translate-x-1/2 -translate-y-1/2
    font-heading
    italic
    font-light
    text-[72px]
    tracking-[0.08em]
    text-white
    transition-colors
    duration-300
    hover:text-[#182D27]
  "
>
  COSA
</Link>

          {/* ================= RIGHT SIDE ================= */}
<div className="flex items-center gap-10">

  {/* EXPLORE WORLD */}
  <div className="group relative flex flex-col items-center">
    <Link
      href="/explore-the-world"
      className="text-white transition-colors duration-300 group-hover:text-[#0F3B35]"
    >
      <TbWorld className="h-7 w-7" />
    </Link>

    <span className="absolute top-10 whitespace-nowrap text-sm text-[#0F3B35] underline opacity-0 transition-all duration-300 group-hover:opacity-100">
      Explore World
    </span>
  </div>

  {/* EXPLORE NEPAL */}
  <div className="group relative flex flex-col items-center">
    <Link
      href="/explore-nepal"
      className="text-white transition-colors duration-300 group-hover:text-[#0F3B35]"
    >
      <TbWorld className="h-7 w-7" />
    </Link>

    <span className="absolute top-10 whitespace-nowrap text-sm text-[#0F3B35] underline opacity-0 transition-all duration-300 group-hover:opacity-100">
      Explore Nepal
    </span>
  </div>

  {/* SEARCH */}
  <button
    aria-label="Search"
    className="group relative h-7 w-7"
  >
    <FiSearch className="absolute inset-0 h-7 w-7 text-white transition-opacity duration-300 group-hover:opacity-0" />

    <FaSearch className="absolute inset-0 h-7 w-7 text-[#0F3B35] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </button>

  {/* HEART */}
  <button
    aria-label="Saved trips"
    className="group relative h-7 w-7"
  >
    <FiHeart className="absolute inset-0 h-7 w-7 text-white transition-opacity duration-300 group-hover:opacity-0" />

    <FaHeart className="absolute inset-0 h-7 w-7 text-[#0F3B35] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </button>

</div>

  </div>
  </header>

      {/* ================= FULL SCREEN MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-[#FAF8F3]">

          {/* MENU TOP BAR */}
          <div className="flex items-center justify-between px-8 py-7">

            

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-slate-600 transition-colors duration-300 hover:text-[#182D27]"
            >
              <FiX className="h-7 w-7" />
            </button>
          </div>

          {/* MENU BODY */}
          <div className="mx-auto grid w-full max-w-[1800px] flex-1 grid-cols-1 gap-10 px-8 pb-16 pt-4 lg:grid-cols-[1.4fr_1fr]">

            {/* LEFT MENU */}
            <div className="flex flex-col justify-center gap-8">
              {MENU_SECTIONS.map((section) => (
                <div
                  key={section.key}
                  onMouseEnter={() => setPreviewKey(section.key)}
                  onFocus={() => setPreviewKey(section.key)}
                >
                  <h2 className="font-serif text-2xl font-light leading-none text-slate-500 transition-colors sm:text-6xl">
                    {section.label}
                  </h2>

                  <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-lg text-slate-600 transition-colors duration-300 hover:text-[#182D27]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT PREVIEW IMAGE */}
            <div className="relative hidden h-full min-h-[420px] w-full overflow-hidden lg:block">
              <Image
                key={preview.key}
                src={preview.image.src}
                alt={preview.image.alt}
                fill
                sizes="35vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}