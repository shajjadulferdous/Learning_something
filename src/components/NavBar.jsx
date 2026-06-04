"use client";

import React, { useState } from "react";
import { Button, Link } from "@heroui/react";

export default function JobPortalNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Temporary Role State for development ---
  // Switch to "seeker", "recruiter", "admin", or null to test link variations
  const userRole = null; 

  const getNavLinks = () => {
    switch (userRole) {
      case "seeker":
        return [
          { label: "Browse Jobs", href: "/jobs" },
          { label: "Applied Jobs", href: "/dashboard/applied" },
          { label: "Companies", href: "/companies" },
        ];
      case "recruiter":
        return [
          { label: "Post a Job", href: "/jobs/new" },
          { label: "Manage Jobs", href: "/dashboard/posted" },
          { label: "Pricing", href: "/pricing" },
        ];
      case "admin":
        return [
          { label: "Admin Dashboard", href: "/admin" },
          { label: "Manage Users", href: "/admin/users" },
          { label: "All Jobs", href: "/admin/jobs" },
        ];
      default:
        return [
          { label: "Browse Jobs", href: "/jobs" },
          { label: "Company", href: "/companies" },
          { label: "Pricing", href: "/pricing" },
        ];
    }
  };

  const navLinks = getNavLinks();

  return (
    <>
      {/* Base Navigation Container */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#0c0c0e]/60 backdrop-blur-md py-4 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LEFT: Branding / Logo Group */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer select-none">
            {/* Exact Gradient Matching Logo Graphic */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#635bff] via-[#a04ef6] to-[#ec4899] shadow-lg shadow-purple-500/20">
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

          {/* RIGHT: Consolidated Capsule Pill Container (Matches Image Layout) */}
          <div className="hidden lg:flex items-center bg-[#18181b]/90 border border-white/[0.04] pl-8 pr-2 py-2 rounded-2xl gap-8 shadow-2xl backdrop-blur-xl">
            
            {/* Dynamic Core Page Links */}
            <ul className="flex items-center gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-zinc-300 hover:text-white transition-colors duration-150 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Visual Divider Node Element */}
            <span className="text-zinc-700 text-sm font-light select-none">|</span>

            {/* Auth Action Target Nodes */}
            <div className="flex items-center gap-6">
              {!userRole ? (
                <>
                  <Link
                    href="/login"
                    className="text-[14px] font-semibold text-[#5b51e8] hover:text-[#746bf2] transition-colors"
                  >
                    Sign In
                  </Link>
                  <Button
                    as={Link}
                    href="/register"
                    className="bg-white text-black font-semibold text-[14px] px-5 h-11 rounded-xl hover:bg-zinc-200 transition-all active:scale-[0.98]"
                  >
                    Get Started
                  </Button>
                </>
              ) : (
                <Button
                  size="sm"
                  className="bg-transparent border border-white/10 text-zinc-400 hover:text-white rounded-xl h-9"
                  onClick={() => console.log("Sign Out Action")}
                >
                  Logout
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Hamburg Trigger Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-zinc-400 hover:text-white p-2 rounded-xl bg-[#18181b] border border-white/5"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </nav>

      {/* Responsive Mobile Sheet Dropdown Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[76px] mx-4 z-50 bg-[#18181b] border border-white/5 rounded-2xl lg:hidden flex flex-col p-6 shadow-2xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="w-full text-zinc-300 py-2 text-base hover:text-white"
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {!userRole && (
            <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-white/5">
              <Link
                href="/login"
                className="text-center font-semibold text-[#5b51e8] py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Button
                as={Link}
                href="/register"
                className="bg-white text-black font-bold w-full h-12 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
}