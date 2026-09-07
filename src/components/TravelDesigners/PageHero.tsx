interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHero({
  
  title,
  subtitle,
  image,
}: PageHeroProps) {
  return (
    <section className="relative h-[640px] w-full overflow-hidden">
      {/* Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Hero Text */}
      <div className="relative z-10 h-full flex items-end">
        <div className="pb-16 pl-16 md:pl-20 text-white max-w-[1100px]">
          <p className="text-[13px] uppercase tracking-[0.15em] mb-3">
           
          </p>
          <h1 className="font-heading italic font-light text-[44px] md:text-[52px] leading-[0.95] tracking-[-0.02em]">
            {title}
          </h1>

          <p className="mt-3 text-[15px]">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}