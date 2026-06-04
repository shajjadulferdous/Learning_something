"use client";

import React from "react";
import { Link } from "@heroui/react";

export default function Footer() {
  
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Job discovery", href: "/jobs" },
        { label: "Worker AI", href: "/ai" },
        { label: "Companies", href: "/companies" },
        { label: "Salary data", href: "/salaries" },
      ],
    },
    {
      title: "Navigations",
      links: [
        { label: "Help center", href: "/help" },
        { label: "Career library", href: "/library" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Brand Guideline", href: "/brand" },
        { label: "Newsroom", href: "/news" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#030303] text-zinc-400 font-sans pt-16 pb-8 px-6 md:px-12 lg:px-24 border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto">
        
        {/* UPPER SECTION: Brand Intro & Links Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-16">
          
          {/* Column 1: Brand Info (Spans 5 blocks on large desktops) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 cursor-pointer select-none">
              {/* Logo Matching Custom Gradient */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#635bff] via-[#a04ef6] to-[#ec4899] shadow-lg shadow-purple-500/10">
                <span className="text-xs font-black text-white tracking-tighter transform -rotate-12">J|P</span>
              </div>
              <div className="flex flex-col justify-center -space-y-1">
                <span className="text-lg font-bold tracking-tight text-white">
                  Job
                </span>
                <span className="text-sm font-semibold text-zinc-400">
                  Portal
                </span>
              </div>
            </Link>
            <p className="text-[15px] leading-relaxed text-zinc-500 max-w-sm mt-2">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Columns 2-4: Dynamically Mapped Navigation Matrices */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h4 className="text-[15px] font-semibold text-[#5b51e8] tracking-wide">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-zinc-400 hover:text-white transition-colors duration-150 font-normal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* LOWER SECTION: Divider line, Social Links, and Metadata */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col-reverse sm:flex-row items-center justify-between gap-6">
          
          {/* Social Platform Node Row */}
          <div className="flex items-center gap-3">
            {/* Facebook Icon Block */}
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#121214] border border-white/[0.04] text-white hover:bg-zinc-800 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            {/* Custom Brand Violet Square Block (Pinterest/Logo Variant) */}
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#5b51e8] text-white hover:bg-[#4d44cb] transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.68 7.91 6.46 9.32-.09-.8-.17-2.03.03-2.91.19-.82 1.23-5.22 1.23-5.22s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.57 2.24-.87 3.49-.25 1.05.52 1.91 1.55 1.91 1.87 0 3.3-1.97 3.3-4.81 0-2.51-1.81-4.27-4.38-4.27-2.98 0-4.73 2.24-4.73 4.55 0 .9.35 1.87.78 2.39.09.1.1.19.07.3-.08.33-.26 1.05-.29 1.19-.05.18-.16.22-.36.13-1.34-.62-2.18-2.58-2.18-4.16 0-3.39 2.46-6.5 7.1-6.5 3.73 0 6.62 2.66 6.62 6.2 0 3.71-2.34 6.69-5.58 6.69-1.09 0-2.11-.57-2.46-1.23 0 0-.54 2.05-.67 2.56-.24.93-.9 2.09-1.34 2.81 1 .31 2.06.48 3.16.48 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
            </a>
            {/* LinkedIn Icon Block */}
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#121214] border border-white/[0.04] text-white hover:bg-zinc-800 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          {/* Legal Meta Data and Copyright Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-[13px] text-zinc-600">
            <span>Copyright 2024 —Job Portal</span>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="text-[13px] text-zinc-600 hover:text-zinc-400">Terms & Policy</Link>
              <span>-</span>
              <Link href="/privacy" className="text-[13px] text-zinc-600 hover:text-zinc-400">Privacy Guideline</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}