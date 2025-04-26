'use client'; // For the formspree submission hook

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

/**
 * Contact form component for submitting a message through Formspree.
 *
 * @returns {React.JSX.Element} The JSX element for the contact form or a success message if the form is submitted.
 */
export default function ContactForm() {
  const [state, handleSubmit] = useForm('mwpvbloo');
  if (state.succeeded) {
    return (
      <p className="p-4 pt-8 text-2xl sm:pt-16 md:text-3xl">
        Thank you for your message, I will review it and get back to you shortly !
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-stretch gap-4 p-3 sm:p-8 lg:w-3/4"
    >
      <label htmlFor="name" className="font-medium">
        Name :
      </label>
      <input
        id="name"
        type="text"
        name="name"
        className="border-2 border-[var(--bg-1)] leading-10"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email" className="font-medium">
        Email Address :
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="border-2 border-[var(--bg-1)] leading-10"
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
        className="hover-bg-1 self-center rounded-xl bg-bg-2-transparent px-12 py-6 text-lg font-medium text-fg-2 shadow-xl sm:text-xl"
      >
        Submit
      </button>
    </form>
  );
}
