"use client";

import Image from "next/image";
import { useState } from "react";

export default function SignupForm() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  }

  return (
    <section id="signup" className="bg-[#f8f7f4] pb-20">
      <div className="max-w-[980px] mx-auto px-8">
        <h2 className="text-[16px] text-neutral-900 max-w-[420px] mb-8">
          To receive updates about exclusive experiences, events, new
          destinations and more please sign up
        </h2>

        {submitted ? (
          <p className="text-[15px] text-neutral-700 mb-16">
            Thanks for signing up — keep an eye on your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-[790px] mb-16">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[12px] mb-2 text-neutral-600">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[12px] mb-2 text-neutral-600">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[12px] mb-2 text-neutral-600">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="email"
                className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500"
                placeholder="john@gmail.com"
              />
            </div>

            <div className="mb-8">
              <p className="text-[12px] mb-2 text-neutral-600">
                GDPR <span className="text-red-500">*</span>
              </p>
              <label className="flex items-start gap-3 text-[13px] text-neutral-600 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5"
                />
                I agree to receive communications from Cosa Travel Ltd. as
                per the Privacy Policy and GDPR regulations.
              </label>
            </div>

            <button
  type="submit"
  className="inline-flex items-center border border-neutral-300 rounded-[20px] px-8 py-4 text-[15px] tracking-[0.08em] text-neutral-700 transition-all duration-300 hover:border-[#C97756] hover:text-[#C97756]"
>
  Submit
</button>
          </form>
        )}

        {/* Partner logos */}
        <div className="flex flex-wrap items-center gap-x-14 gap-y-6">
          <span className="text-[14px] text-neutral-500">Cosa Network</span>
          <Image
            src="/logos/serandipians.png"
            alt="Serandipians"
            width={200}
            height={50}
            className="h-10 w-auto"
          />
          <Image src="/logos/pure.png" alt="Pure" width={200} height={56} className="h-14 w-auto" />
          <Image src="/logos/wendy.png" alt="AITO" width={200} height={56} className="h-14 w-auto" />
          <Image
            src="/logos/switchzerland.png"
            alt="Switzerland Member"
            width={200}
            height={36}
            className="h-9 w-auto"
          />
        </div>
      </div>
    </section>
  );
}