"use client";

import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: Readonly<FaqAccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border-light">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-primary focus-visible:ring-offset-2"
            >
              <span className="text-base font-medium text-text-primary">
                {item.question}
              </span>
              <span className="mt-0.5 shrink-0 rounded-full bg-red-light p-1 text-red-primary transition-colors">
                {isOpen ? <MdRemove size={16} /> : <MdAdd size={16} />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-100 pb-5 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
