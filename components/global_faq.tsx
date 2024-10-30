"use client";

import { Accordion } from "flowbite-react";
import Link from "next/link";

export interface FAQ {
  question: string;
  answer: string;
}

export function GlobalFaq({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="flex flex-col gap-8 w-full justify-center items-center">
      {/* Left Side - FAQs Title and Contact Button */}
      {/* <div className="flex flex-col gap-8 flex-grow md:w-1/2">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-4xl text-black">FAQs</span>
          <span className="font-normal text-lg text-black">
            Ready to Upgrade Your Network?
          </span>
        </div>
        <Link
          href="/contact"
        className="flex justify-center w-1/2 items-center gap-2 px-6 py-3 border border-black">
          <span className="font-normal text-base text-black">Contact</span>
        </Link>
      </div> */}

      {/* Right Side - Accordion */}
      <span className="font-bold text-4xl text-center text-black">FAQs</span>
      <div className="flex flex-col grow">
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title>{faq.question}</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
      <div className="w-[560px] flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-4 self-stretch">
          <span className="font-bold text-2xl text-center text-black">
            Still have questions?
          </span>
          <span className="font-normal text-lg text-center text-black">
            Our team will contact you within an hour
          </span>
        </div>
        <Link
          href={"/contact"}
          className="flex justify-center items-center gap-2 px-6 py-3 border border-black"
        >
          <span className="font-normal text-base text-black">Contact</span>
        </Link>
      </div>
    </div>
  );
}
