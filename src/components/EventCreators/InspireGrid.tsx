"use client";

import { useState } from "react";
import Modal from "@/components/Shared/Modal";

const STORIES = [
  {
    title: "The Cape of Good Fun",
    eyebrow: "Events · Southern Africa",
    image: "https://picsum.photos/seed/cosa-ec-capegood/700/560",
    summary:
      "Only the best for the best. The top 140 employees of an international IT company were invited to celebrate their ...",
    body: "Only the best for the best. The top 140 employees of an international IT company were invited to celebrate their record year with a week in Cape Town — coastal drives along Chapman's Peak, a private wine estate lunch and a closing gala dinner with Table Mountain lit up behind them.",
  },
  {
    title: "One hundred reasons to celebrate",
    eyebrow: "Events · Southern Europe",
    image: "https://picsum.photos/seed/cosa-ec-hundred/700/560",
    summary:
      "A couple celebrated birthday weekend in Puglia, marking '100 years of La Dolce Vita', as both of them ...",
    body: "A couple celebrated a joint birthday weekend in Puglia, marking '100 years of La Dolce Vita' as both of them turned 50. Family and friends flew in from three continents for a long table dinner among the olive groves, live music and a firework send-off over the sea.",
  },
  {
    title: "Life is different in Tokyo",
    eyebrow: "Events · East Asia",
    image: "https://picsum.photos/seed/cosa-ec-tokyo/700/560",
    summary:
      "On the other side of the globe is a megacity that's always looking to the future but still connected to ...",
    body: "On the other side of the globe is a megacity that's always looking to the future but still deeply connected to its traditions. A private sales-incentive trip mixed Tokyo's neon energy with a quiet tea ceremony and an evening at a traditional ryokan.",
  },
];

export default function InspireGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? STORIES[openIndex] : null;

  return (
    <>
      <section className="bg-[#f8f7f4] pb-16">
        <div className="max-w-[1180px] mx-auto px-8">
          <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-10">
            Cosa events to inspire you
          </h2>

          <div className="grid sm:grid-cols-3 gap-8">
            {STORIES.map((s, i) => (
              <div key={s.title}>
                <div
                  className="w-full aspect-[4/3] bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url('${s.image}')` }}
                />
                <p className="text-[12px] uppercase tracking-[0.08em] text-neutral-500 mb-2">
                  {s.eyebrow}
                </p>
                <h3 className="text-[16px] text-neutral-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-neutral-600 mb-4">
                  {s.summary}
                </p>
                <button
  onClick={() => setOpenIndex(i)}
  className="inline-flex items-center border border-neutral-400 rounded-md px-5 py-2 text-[12.5px] text-neutral-900 hover:border-[#C77B4E] hover:text-[#C77B4E] transition-colors cursor-pointer"
>
  Read More
</button>
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