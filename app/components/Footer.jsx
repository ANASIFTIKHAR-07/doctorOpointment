import React from 'react'
import Image from "next/image"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import logo from "../assets/img/logo.jpg"
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white p-6">
        <div className="flex items-center justify-center mb-4">
          <Image src={logo} alt="Logo" width={50} height={50} className="mr-2" />
          <p className="text-xl font-semibold">Wellness Excellence</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p>Email: rana.abdullah4844@gmil.com</p>
            <p>Phone: +92 300-7994484</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-gray-500">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-500">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Address</h2>
            <p>123 Wellness Street</p>
            <p>Cityville, State 12345</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-sm">&copy; 2023 Wellness Excellence. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer