"use client";

import React, { useState } from "react";
import { Button, Input, Link } from "@heroui/react";
// Import Better-Auth client methods (adjust this import path based on your better-auth config setup)
import { authClient } from "@/lib/auth-client"; 

export default function RegisterPage({ isOpen, onClose }) {
  const [authMode, setAuthMode] = useState("login"); // "login" or "register"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  // Handle Better-Auth Email Credentials Authentication
  const handleCredentialAuth = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (authMode === "register") {
        // Better-Auth Sign Up Strategy
        await authClient.signUp.email({
          email,
          password,
          name,
          callbackURL: "/", 
        });
      } else {
        // Better-Auth Sign In Strategy
        await authClient.signIn.email({
          email,
          password,
          callbackURL: "/",
        });
      }
      onClose(); // Close modal on success
    } catch (err) {
      setError(err.message || "An authentication error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Better-Auth Social Authentication Providers
  const handleSocialAuth = async (provider) => {
    try {
      await authClient.signIn.social({
        provider: provider, // "github", "google", etc.
        callbackURL: "/",
      });
    } catch (err) {
      setError(`Failed to sign in with ${provider}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop blur overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Surface Box */}
      <div className="relative w-full max-w-md bg-[#0c0c0e] border border-white/[0.05] rounded-3xl p-8 shadow-2xl z-10 text-white overflow-hidden">
        
        {/* Subtle background ambient purple light flare top right */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

        {/* Header Branding Row */}
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#635bff] via-[#a04ef6] to-[#ec4899] shadow-lg shadow-purple-500/20">
            <span className="text-xs font-black text-white italic transform -rotate-12">P|H</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight mt-2 text-zinc-100">
            {authMode === "login" ? "Welcome back to Programming Hero" : "Create your account"}
          </h3>
          <p className="text-xs text-zinc-500">
            {authMode === "login" ? "Enter details to view and apply to jobs" : "Get started with your dream career platform"}
          </p>
        </div>

        {/* Error Alert Box */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">
            {error}
          </div>
        )}

        {/* Input/Form Block Fields */}
        <form onSubmit={handleCredentialAuth} className="space-y-4">
          {authMode === "register" && (
            <Input
              type="text"
              label="Full Name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              variant="flat"
              labelPlacement="outside"
              classNames={{
                inputWrapper: "bg-[#141416] border border-white/[0.04] group-data-[focus=true]:border-purple-500/50 rounded-xl h-11",
                input: "text-zinc-200 placeholder:text-zinc-600 text-sm",
                label: "text-zinc-400 font-medium text-xs mb-1",
              }}
            />
          )}

          <Input
            type="email"
            label="Email address"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="flat"
            labelPlacement="outside"
            classNames={{
              inputWrapper: "bg-[#141416] border border-white/[0.04] group-data-[focus=true]:border-purple-500/50 rounded-xl h-11",
              input: "text-zinc-200 placeholder:text-zinc-600 text-sm",
              label: "text-zinc-400 font-medium text-xs mb-1",
            }}
          />

          <Input
            type="password"
            label="Password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="flat"
            labelPlacement="outside"
            classNames={{
              inputWrapper: "bg-[#141416] border border-white/[0.04] group-data-[focus=true]:border-purple-500/50 rounded-xl h-11",
              input: "text-zinc-200 placeholder:text-zinc-600 text-sm",
              label: "text-zinc-400 font-medium text-xs mb-1",
            }}
          />

          {/* Form Action Button */}
          <Button
            type="submit"
            isLoading={isLoading}
            className="w-full bg-white text-black font-semibold h-11 rounded-xl hover:bg-zinc-200 transition-all text-sm mt-2"
          >
            {authMode === "login" ? "Sign In" : "Register Account"}
          </Button>
        </form>

        {/* Visual Content Divider */}
        <div className="relative flex py-4 items-center my-2">
          <div className="flex-grow border-t border-white/[0.04]"></div>
          <span className="flex-shrink mx-4 text-zinc-600 text-[11px] font-medium tracking-wider uppercase">or continue with</span>
          <div className="flex-grow border-t border-white/[0.04]"></div>
        </div>

        {/* Better-Auth Social Login Providers Block */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleSocialAuth("google")}
            className="flex items-center justify-center gap-2 h-11 rounded-xl bg-[#141416] border border-white/[0.04] hover:bg-zinc-800 transition-colors text-xs font-medium text-zinc-300"
          >
            {/* Google Vector Icon Logo */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.227C18.256 1.433 15.485 0 12.24 0 5.58 0 0 5.58 0 12.24s5.58 12.24 12.24 12.24c6.96 0 11.57-4.854 11.57-11.79 0-.795-.085-1.4-.19-1.927h-11.38z"/>
            </svg>
            Google
          </button>

          <button
            onClick={() => handleSocialAuth("github")}
            className="flex items-center justify-center gap-2 h-11 rounded-xl bg-[#141416] border border-white/[0.04] hover:bg-zinc-800 transition-colors text-xs font-medium text-zinc-300"
          >
            {/* GitHub Vector Icon Logo */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </button>
        </div>

        {/* Bottom Context Switch Text */}
        <div className="mt-8 text-center text-xs text-zinc-500">
          {authMode === "login" ? (
            <>
              Don not  have an account?{" "}
              <button 
                onClick={() => setAuthMode("register")}
                className="text-purple-400 hover:underline font-medium focus:outline-none ml-1"
              >
                Sign up free
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button 
                onClick={() => setAuthMode("login")}
                className="text-purple-400 hover:underline font-medium focus:outline-none ml-1"
              >
                Sign In
              </button>
            </>
          )}
        </div>

        {/* Top absolute corner close cross button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl hover:bg-zinc-900 text-zinc-500 hover:text-white transition-colors"
          aria-label="Close authentication modal"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>
    </div>
  );
}