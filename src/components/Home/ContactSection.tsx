import Image from "next/image";
import Link from "next/link";

const departments = [
  {
    icon: "/icons/traveldesginersalt.png",
    title: "Travel designers",
    phone: "+41 44 269 40 42",
    email: "world@cosatravel.ch",
  },
  {
    icon: "/icons/corporatelevel.png",
    title: "Corporate travel",
    phone: "+41 44 269 40 42",
    email: "business@cosatravel.ch",
  },
  {
    icon: "/icons/eventcreators.png",
    title: "Event creators",
    phone: "+41 44 269 40 42",
    email: "events@cosatravel.ch",
  },
  {
    icon: "/icons/traveldesigners.png",
    title: "Travel designers",
    phone: "+41 44 269 40 42",
    email: "dmc@cosatravel.ch",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#f8f7f4] pt-16 pb-16">
      <div className="max-w-[980px] mx-auto px-8">
        {/* Meet the family */}
        <h2 className="font-heading italic font-light text-[32px] text-neutral-900 mb-5">
          Meet the Cosa family
        </h2>
        <p className="text-[14px] leading-[1.7] text-neutral-700 max-w-[700px] mb-6">
          Cosa specialises in creating unique trips based on our hands-on
          knowledge of destinations and extensive network of partners.
          We&apos;re expert travel planners but we&apos;re also expert
          travellers too.
        </p>
        <Link
          href="/our-team"
         className="
inline-flex items-center
border border-neutral-300
rounded-full
px-4 py-2
text-[12px]
tracking-[0.06em]
uppercase
text-neutral-700
transition-all duration-300
hover:border-[#C97756]
hover:text-[#C97756]
"
        >
          Meet The Team
        </Link>

        {/* Contact us */}
        <h2 className="font-heading italic font-light text-[32px] text-neutral-900 mb-5">
          Contact us and see where it takes you
        </h2>
        <p className="text-[14px] leading-[1.7] text-neutral-700 max-w-[700px] mb-10">
          If you want to know more about travelling with Cosa, please get in
          touch with the relevant department directly. Or you can fill out
          the{" "}
          <a
            href="#signup"
            className="text-[#c96442] underline underline-offset-2"
          >
            general contact form.
          </a>
        </p>

        {/* Department icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {departments.map((d) => (
            <div key={d.title + d.email}>
              <Image
                src={d.icon}
                alt={d.title}
                width={30}
                height={30}
                className="mb-3"
              />
              <h3 className="text-[14px] text-neutral-900 mb-1.5">
                {d.title}
              </h3>
              <a
                href={`tel:${d.phone.replace(/\s+/g, "")}`}
                className="block text-[12.5px] text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {d.phone}
              </a>
              <a
                href={`mailto:${d.email}`}
                className="block text-[12.5px] text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {d.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
