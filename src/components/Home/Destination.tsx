"use client";

import { useState } from "react";
import Modal from "@/components/Shared/Modal";

const DESTINATIONS = [
  "Switzerland — cheese-making in the Alps",
  "Rwanda — gorilla trekking",
  "Indonesia — island hopping in Bali",
  "Kenya — safari in the Maasai Mara",
  "Japan — cherry blossom season in Kyoto",
  "Peru — trekking the Inca Trail",
];

export default function Destination() {
  const [open, setOpen] = useState(false);

  return (
    <section id="destinations" className="bg-[#f8f7f4] pt-16 pb-24">
      <div className="max-w-[900px] mx-auto px-8 text-center">
        <h2 className="font-heading italic font-light text-[40px] text-neutral-900 mb-10">
          Inspiring Destination
        </h2>

        <div
          className="w-full aspect-[955/610] bg-cover bg-center mb-10"
          style={{ backgroundImage: "url('/images/Destination.png')" }}
        />

        <p className="text-[15px] leading-[1.7] text-neutral-700 max-w-[760px] mx-auto mb-8">
          From making cheese in the Alps to watching gorillas in Rwanda,
          we&apos;ll find the perfect match for your wishes. With Cosa,
          you&apos;ve got a world of adventure in your hands, be that around
          the corner or halfway round the globe. Travel with us and get
          inspired.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="
inline-flex items-center
border border-neutral-300
rounded-[20px]
px-8 py-4
text-[15px]
tracking-[0.08em]
text-neutral-700
transition-all duration-300
hover:border-[#C97756]
hover:text-[#C97756]
"
        >
          Explore The World
        </button>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="A World of Adventure">
        <p className="mb-6">
          A few of the destinations our travel designers plan trips to most
          often:
        </p>
        <ul className="space-y-2 mb-8 list-disc list-inside">
          {DESTINATIONS.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <a
          href="#signup"
          onClick={() => setOpen(false)}
          className="
inline-flex items-center
border border-neutral-300
rounded-[20px]
px-8 py-4
text-[15px]
tracking-[0.08em]
text-neutral-700
transition-all duration-300
hover:border-[#C97756]
hover:text-[#C97756]
"
        >
          Get In Touch
        </a>
      </Modal>
    </section>
  );
}
