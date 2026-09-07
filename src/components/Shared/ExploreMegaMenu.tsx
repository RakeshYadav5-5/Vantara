"use client";

const SECTIONS = [
  {
    title: "Explore",
    links: ["The World", "Switzerland", "Cosa inspirations"],
    hrefs: [
      "/explore-the-world",
      "/explore-switzerland",
      "/cosa-inspirations",
    ],
  },
  {
    title: "Services",
    links: [
      "Travel Designer",
      "Event Creators",
      "Booking Specialist",
      "Switzerland Experts",
    ],
    hrefs: [
      "/travel-design",
      "/events",
      "/services/booking-specialists",
      "/services/switzerland-experts",
    ],
  },
  {
    title: "Why Cosa",
    links: ["Our Approach", "Conscious Travel", "Corporate Events"],
    hrefs: [
      "/why-choose-cosa",
      "/conscious-travel",
      "/corporate-events",
    ],
  },
  {
    title: "About Us",
    links: ["Our Story", "Conscious travel", "Team", "Career"],
    hrefs: [
      "/about-us",
      "/conscious-travel",
      "/about-us/meet-the-team",
      "/career",
    ],
  },
  {
    title: "Contact",
    links: ["General Inquiries", "Departments"],
    hrefs: ["/contacts", "/contacts/departments"],
  },
];

export default function ExploreMegaMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-bg">
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-8 right-10 text-ink hover:text-[#C97756] transition-colors duration-300"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="h-full grid md:grid-cols-2">
        {/* Left: nav sections */}
        <div className="flex flex-col justify-center px-10 md:px-20 gap-10 overflow-y-auto py-24">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              {/* Section Title */}
              <a
                href={section.hrefs[0]}
                className="font-editorial text-[52px] md:text-[64px] leading-none text-slate transition-colors duration-300 hover:text-[#C97756]"
              >
                {section.title}
              </a>

              {/* Links */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3">
                {section.links.map((link, i) => (
                  <a
  key={link}
  href={section.hrefs[i]}
  className="text-[15px] text-[#6b7280] hover:!text-[#C97756] transition-colors duration-300"
>
  {link}
</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: image panel */}
        <div className="hidden md:block bg-neutral-100">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/nav/mega-menu-image.jpg')",
            }}
          />
        </div>
      </div>
    </div>
  );
}