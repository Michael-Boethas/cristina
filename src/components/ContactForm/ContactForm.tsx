"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mwpvbloo");
  if (state.succeeded) {
    return (
      <p className="text-2xl md:text-3xl p-4 pt-8 sm:pt-16">
        Thank you for your message, I will review it and get back to you shortly
        !
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-stretch gap-4 p-3 w-full sm:p-8 lg:w-3/4"
    >
      <label htmlFor="email" className="font-medium">
        Email Address :
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="leading-10 border-2 border-[var(--bg-1)]"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message" className="font-medium">
        Message :
      </label>
      <textarea
        id="message"
        name="message"
        className="min-h-[33vh] border-2 border-[var(--bg-1)]"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="hover-bg-1 self-center px-12 py-6 text-lg sm:text-xl font-medium rounded-xl bg-bg-2-transparent text-fg-2"
      >
        Submit
      </button>
    </form>
  );
}
