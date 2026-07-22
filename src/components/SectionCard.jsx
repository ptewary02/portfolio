// src/components/SectionCard.jsx
import React from 'react';

export default function SectionCard({ children, className = '', id = '' }) {
  return (
    <section
      id={id}
      className={`
        min-w-section-gap-mobile
        h-full
        ml-20
        mr-20
        my-6 p-6 sm:p-8 lg:p-10
        bg-white/80 dark:bg-slate-900/80 
        backdrop-blur-md 
        rounded-3xl 
        shadow-xl 
        border border-white/40 dark:border-slate-800/50 
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </section>
  );
}