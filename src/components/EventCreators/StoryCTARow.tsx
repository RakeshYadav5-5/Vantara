interface StoryCTARowProps {
  heading: string;
  copy: string;
  image: string;
  buttonLabel: string;
  onButtonClick: () => void;
  reverse?: boolean; // true = image on left, text on right
}

export default function StoryCTARow({
  heading,
  copy,
  image,
  buttonLabel,
  onButtonClick,
  reverse = false,
}: StoryCTARowProps) {
  return (
    <section className="bg-[#f8f7f4] pb-16">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div
            className={`md:col-span-5 ${reverse ? "md:order-1" : "md:order-2"}`}
          >
            <div
              className="w-full aspect-[16/11] bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </div>

          <div
            className={`md:col-span-7 ${
              reverse ? "md:order-2" : "md:order-1"
            }`}
          >
            <h2 className="font-heading italic font-light text-[30px] md:text-[34px] text-neutral-900 mb-5 leading-tight max-w-[420px]">
              {heading}
            </h2>
            <p className="text-[14px] leading-[1.8] text-neutral-700 max-w-[420px] mb-7">
              {copy}
            </p>
            <button
              onClick={onButtonClick}
              className="inline-flex items-center border border-neutral-400 rounded-full px-6 py-2.5 text-sm text-neutral-900 hover:border-[#C77B4E] hover:text-[#C77B4E] transition-colors cursor-pointer"
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}