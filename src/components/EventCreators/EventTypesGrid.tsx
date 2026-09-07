"use client";

import { useState } from "react";
import Link from "next/link";
import Modal from "@/components/Shared/Modal";

const EVENT_TYPES = [
  {
    title: "Corporate events",
    image: "https://picsum.photos/seed/cosa-ec-corporate/700/560",
    summary:
      "Let's be honest. As much as anyone loves their job, a little extra motivation can usually work wonders. At Cosa, we know how to create company events that will reward hard work with moments no one will ever forget.",
    href: "/corporate-events",
  },
  {
    title: "Private events",
    image: "https://picsum.photos/seed/cosa-ec-private/700/560",
    summary:
      "Milestones are meant to be marked in style. We know how important that is and how much it means to you. From significant birthdays to joyful anniversaries, we'll help you celebrate with your family and friends.",
    body: "Milestones are meant to be marked in style. We know how important that is and how much it means to you. From significant birthdays to joyful anniversaries, we'll help you celebrate with your family and friends — handling the venue, guest logistics and every detail in between so you can simply enjoy the occasion.",
  },
  {
    title: "Group travel",
    image: "https://picsum.photos/seed/cosa-ec-group/700/560",
    summary:
      "If the words group travel make you nervous, don't worry. Group travel with us means fifteen friends taking a train ride of a lifetime or enjoying an art-themed week together. We know you'll love group travel, Cosa style.",
    body: "If the words group travel make you nervous, don't worry. Group travel with us means fifteen friends taking a train ride of a lifetime or enjoying an art-themed week together, not fifteen friends arguing about the itinerary. We know you'll love group travel, Cosa style.",
  },
];

export default function EventTypesGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const active =
    openIndex !== null && !EVENT_TYPES[openIndex].href
      ? EVENT_TYPES[openIndex]
      : null;

  return (
    <>
      <section className="bg-[#f8f7f4] pb-[140px]">
        <div className="max-w-[850px] mx-auto px-5">

          {/* Heading */}
          <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 text-center mb-12">
            What type of event do you want?
          </h2>

          {/* Event cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 items-start">

            {EVENT_TYPES.map((item, i) => (
              <div
                key={item.title}
                className={
                  i === 0 || i === 2
                    ? "md:translate-y-[100px]"
                    : ""
                }
              >
                {/* Image */}
                <div
                  className="w-full aspect-[3/2] bg-cover bg-center mb-3"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                />

                {/* Title */}
                <h3 className="text-[15px] text-neutral-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] leading-[1.6] text-neutral-600 mb-4">
                  {item.summary}
                </p>

                {/* Read More */}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center border border-neutral-400 rounded-md px-5 py-2 text-[11px] text-neutral-900 hover:border-[#C77B4E] hover:text-[#C77B4E] transition-colors"
                  >
                    Read More
                  </Link>
                ) : (
                  <button
                    onClick={() => setOpenIndex(i)}
                    className="inline-flex items-center border border-neutral-400 rounded-md px-5 py-2 text-[11px] text-neutral-900 hover:border-[#C77B4E] hover:text-[#C77B4E] transition-colors cursor-pointer"
                  >
                    Read More
                  </button>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

      <Modal
        open={!!active}
        onClose={() => setOpenIndex(null)}
        title={active?.title}
      >
        {active && <p>{active.body}</p>}
      </Modal>
    </>
  );
}