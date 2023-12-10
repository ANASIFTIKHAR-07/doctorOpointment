"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DocImage from "../../assets/img/logo.jpg"

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-red-400 px-4 py-3 md:px-8 md:py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
            <Image
              className="rounded-lg"
              src={DocImage}
              alt="Logo"
              width={50}
              height={50}
            />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link className="text-white hover:text-gray-300" href={"/docAppointment"}>
            Doctors Appointment
          </Link>
          <Link className="text-white hover:text-gray-300" href={"/aboutUs"}>
            About us
          </Link>
          {/* Add more menu items as needed */}
        </div>

        {/* Sign In and Log In for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link className="text-white hover:text-gray-300" href={"/signin"}>
            Sign up
          </Link> 
          <Link
            className="bg-white text-black py-2 px-4 text-base font-bold rounded-lg"
            href={"/login"}
          >
            Log in
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-cyan-600 ${
            isMobileMenuOpen ? "slide-in" : "hidden"
          }`}
        >
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link
              className="text-white hover:text-gray-300"
              href={"/docAppoinment"}
              onClick={closeMobileMenu}
            >
              Doctors Appointment
            </Link>
            <Link
              className="text-white hover:text-gray-300"
              href={"/aboutus"}
              onClick={closeMobileMenu}
            >
              About us
            </Link>

            {/* Auth Links for Mobile */}
            <div className="flex flex-col space-y-2">
              <Link
                className="text-white  hover:bg-red-500 hover:text-white"
                href={"/signin"}
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
              <Link
                className="bg-white text-black hover:bg-black hover:text-white py-2 px-4 text-base font-bold rounded-lg"
                href={"/login"}
                onClick={closeMobileMenu}
              >
                Log in
              </Link>
            </div>

            {/* Close Button for Mobile Menu */}
            <button
              className="text-white focus:outline-none"
              onClick={closeMobileMenu}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
