"use client";

export default function WhyChooseCosa() {
  return (
    <section id="why-choose-cosa" className="bg-[#f8f7f4] pt-24 pb-16 ">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {/* Left column */}
          <div>
            <h2 className="font-heading italic font-light text-[40px] text-neutral-900 mb-6">
              Why Choose Cosa
            </h2>
            <p className="text-[15px] leading-[1.7] text-neutral-700 max-w-[330px] mb-16">
              For over 40 years, we&apos;ve been crafting one-of-a-kind
              experiences for those seeking adventure.
            </p>
            <div
              className="w-full aspect-[554/758] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/drummer.png')" }}
            />
          </div>

          {/* Right column */}
          <div>
            <div
              className="w-full aspect-[4/5] bg-cover bg-center mb-16"
              style={{ backgroundImage: "url('/images/fire.png')" }}
            />
            <p className="text-[15px] leading-[1.7] text-neutral-700 max-w-[345px] ml-auto">
              We build dream trips across the world, working with local
              experts to offer you authentic travel that will awaken your
              senses and broaden your horizons.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="text-center mt-20">
          <p className="text-[15px] leading-[1.7] font-medium text-neutral-900 max-w-[830px] mx-auto mb-8">
            We make the impossible possible so that every trip is unique and
            unforgettable. No matter what you&apos;re looking for, we have the
            travel experience to make your dreams come true.
          </p>
         <a
  href="/why-choose-cosa"
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
    Tell Me More
</a>
        </div>
      </div>
    </section>
  );
}