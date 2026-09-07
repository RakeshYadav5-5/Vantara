import Link from "next/link";

export default function CSRSection() {
  return (
    <section className="bg-[#f8f7f4] pb-24">
      <div className="max-w-[1180px] mx-auto px-8">
        <h2 className="font-heading italic font-light text-[32px] md:text-[36px] text-neutral-900 mb-10">
          Corporate Social Responsibility
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="w-full aspect-[4/3] bg-cover bg-center"
            style={{
              backgroundImage: "url('/eventcreator/csr.png')",
            }}
          />

          <div className="max-w-md">
            <p className="text-[14px] leading-[1.7] text-neutral-700 mb-8">
              Cosa events are all about enjoyment but they can also include
              an element of giving back to the local community. We choose
              hands-on projects with a lasting environmental or social
              impact, such as building new facilities for a school in South
              Africa. Ask us for details.
            </p>

            <Link
              href="/csr"
              className="inline-flex items-center border border-neutral-400 rounded-full px-6 py-2.5 text-sm text-neutral-900 hover:border-[#C77B4E] hover:text-[#C77B4E] transition-colors"
            >
              Learn more about our CSR
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}