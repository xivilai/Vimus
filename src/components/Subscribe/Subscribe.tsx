import React from "react";

type Props = {};

export default function Subscribe({}: Props) {
  return (
    <section
      id="subscribe"
      className="flex flex-wrap gap-2 text-center justify-center space-x-3 mb-8"
    >
      <h2 className="w-full text-xl">Subscribe to our newsletter</h2>
      <input
        type="text"
        placeholder="your email"
        className="p-2 text-black font-semibold"
      />
      <button className="border-2 border-white py-2 px-4">Subscribe</button>
    </section>
  );
}
