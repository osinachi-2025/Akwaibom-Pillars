'use client';

import React from 'react';

export default function WhatsAppButton() {
  const phoneNumber = '2348155706336';
  const message = 'Hello AIPECA, I would like to learn more about your organization.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
      style={{ backgroundColor: '#25D366' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.363.627 4.673 1.817 6.693L2.667 29.333l6.827-1.787A13.28 13.28 0 0 0 16.003 29.333c7.363 0 13.33-5.97 13.33-13.333S23.366 2.667 16.003 2.667zm0 24.267a11.01 11.01 0 0 1-5.613-1.54l-.403-.24-4.053 1.06 1.08-3.947-.263-.413A10.987 10.987 0 0 1 5.003 16c0-6.067 4.933-11 11-11s11 4.933 11 11-4.933 11-11 11zm6.04-8.24c-.333-.167-1.967-.97-2.273-1.08-.307-.113-.53-.167-.753.167-.223.333-.863 1.08-1.057 1.303-.193.22-.387.247-.72.083-.333-.167-1.407-.52-2.68-1.653-.99-.883-1.66-1.973-1.853-2.307-.193-.333-.02-.513.147-.68.15-.15.333-.387.5-.58.167-.193.223-.333.333-.553.113-.22.057-.413-.027-.58-.083-.167-.753-1.813-1.033-2.48-.273-.653-.55-.563-.753-.573-.193-.01-.413-.013-.633-.013-.22 0-.58.083-.883.413-.303.333-1.16 1.133-1.16 2.763s1.187 3.207 1.353 3.427c.167.22 2.34 3.573 5.673 5.007.793.343 1.413.547 1.897.7.797.253 1.523.217 2.097.133.64-.097 1.967-.803 2.243-1.58.277-.777.277-1.443.193-1.58-.083-.14-.303-.22-.637-.387z" />
      </svg>
    </a>
  );
}
