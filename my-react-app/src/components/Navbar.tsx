"use client";

import { useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import educationLogo from "../assets/educationlogo.jpg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Main Page", href: "/", color: "text-primary" },
    { label: "Study Plan", href: "/study-plan", color: "text-primary" },
    { label: "Exam", href: "/exam", color: "text-exam-blue" },
    { label: "Teachers", href: "/teachers", color: "text-teacher-orange" },
    { label: "Principal", href: "/principal", color: "text-principal-green" },
    { label: "Payment Mode", href: "/payment", color: "text-payment-red" },
    { label: "Schedule", href: "/schedule", color: "text-primary" },
    { label: "Entry", href: "/entry", color: "text-primary" },
    { label: "Events", href: "/events", color: "text-primary" },
    { label: "Contact", href: "/contact", color: "text-primary" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={educationLogo}
              alt="F.G.P.H.S.T.C"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-education-blue to-education-green bg-clip-text text-transparent">
              F.G.P.H.S.T.C
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {links.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md h-10 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-education-blue/10 hover:to-education-green/10 ${item.color}`}
              >
                {item.label}
              </a>
            ))}
            <button className="inline-flex items-center justify-center gap-2 rounded-md border border-red-600 bg-red-600 text-white h-10 px-4 py-2 ml-4 text-sm font-medium hover:bg-red-700 transition-colors">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-md p-2 h-10 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 px-4 py-3">
            {links.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-left rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 ${item.color}`}
              >
                {item.label}
              </a>
            ))}
            <button className="flex items-center gap-2 rounded-md border border-red-600 bg-red-600 text-white px-3 py-2 text-sm font-medium hover:bg-red-700 transition-colors">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
