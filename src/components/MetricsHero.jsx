"use client";

import React from "react";
import Image from "next/image";

export default function MetricsHero() {
  const stats = [
    {
      value: "50K",
      label: "Active Jobs",
      icon: (
        <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H4.5a.75.75 0 0 1-.75-.75v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 14.15m17.25 0V10.5A2.25 2.25 0 0 0 18 8.25h-2.25a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5H6a2.25 2.25 0 0 0-2.25 2.25v3.65m14.25-5.4V5.25A2.25 2.25 0 0 0 15.75 3h-7.5A2.25 2.25 0 0 0 6 5.25v3" />
        </svg>
      ),
    },
    {
      value: "12K",
      label: "Companies",
      // Building/Office icon
      icon: (
        <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
    },
    {
      value: "2M",
      label: "Job Seekers",
      // Search / User magnifying icon
      icon: (
        <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      ),
    },
    {
      value: "97%",
      label: "Satisfaction Rate",
      // Star icon
      icon: (
        <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.151-.326.619-.326.77 0l2.89 5.811 6.407.934c.36.052.504.494.242.747l-4.633 4.516 1.094 6.381c.06.353-.31.622-.627.456l-5.72-3.007-5.72 3.007c-.317.165-.686-.103-.627-.456l1.094-6.381-4.633-4.516c-.262-.253-.117-.695.242-.747l6.406-.934 2.89-5.811Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#030303] text-white overflow-hidden pt-24 pb-20 px-6 sm:px-12 lg:px-24">
      
      {/* 1. Ambient Background Layer */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none select-none z-0">
        <div className="relative w-full max-w-5xl aspect-[16/10] mt-[-5%] sm:mt-[-10%]">
          
          {/* Globe Image Render */}
          <Image
            src="/image/globe.png" // Place your globe.png file directly into your nextjs 'public' directory
            alt="Global Network Ambient Globe"
            fill
            priority
            className="object-contain opacity-70 mix-blend-screen"
          />

          {/* Radial mask that fades out the globe edges seamlessly into the #030303 background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#030303_85%)]" />
          
          {/* Subtle blue light flare behind the globe curve */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        </div>
      </div>

      {/* 2. Interactive Text Layer Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-12 sm:mt-24 mb-16">
        <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-medium tracking-tight text-zinc-100 leading-snug">
          Assisting over <span className="text-white font-semibold">15,000 job seekers</span> <br />
          find their dream positions.
        </h2>
      </div>

      {/* 3. Metrics Statistics Data Grid Cards */}
      <div className="relative z-10  mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-start bg-[#0b0b0d]/90 border border-white/[0.04] rounded-2xl p-6 min-h-[170px] backdrop-blur-md shadow-2xl transition-all duration-200 hover:border-white/[0.08]"
          >
            {/* Top Row: Icon Element */}
            <div className="p-2 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center">
              {card.icon}
            </div>

            {/* Bottom Row: Metric Text Stack */}
            <div className="flex flex-col gap-1 mt-6">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {card.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-zinc-500">
                {card.label}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}