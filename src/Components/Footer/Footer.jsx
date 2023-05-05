import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-800 py-4 sm:py-8">
        <div class="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div class="flex items-center mb-4 sm:mb-0">
            <img src="https://images.unsplash.com/photo-1534422646206-3cf5a7d4a1b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Logo" class="h-8 w-8 mr-2" />
            <h3 class="font-bold text-xl">RUSTIC ELEGANCE</h3>
          </div>
          <div class="flex items-center mb-4 sm:mb-0">
            <a href="/" class="text-gray-400 hover:text-white mr-4">Home</a>
            <a href="/" class="text-gray-400 hover:text-white mr-4">Recipes</a>
            <a href="/" class="text-gray-400 hover:text-white mr-4">About Us</a>
            <a href="/" class="text-gray-400 hover:text-white mr-4">Contact</a>
          </div>
          <div class="flex items-center">
            <a href="/" class="text-gray-400 hover:text-white mr-2 sm:mr-4"><FaFacebook /></a>
            <a href="/" class="text-gray-400 hover:text-white mr-2 sm:mr-4"><FaTwitter /></a>
            <a href="/" class="text-gray-400 hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;