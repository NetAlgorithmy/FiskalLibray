import React from 'react';
import {  FaYoutube, FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';
function Footer() {
    return (
<footer className="bg-white py-6 text-blue-700 shadow-lg">
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-between items-center ">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:flex items-center">
           
            <div>
              <p className="text-ml">Copyright © 2022-2023</p>
              <p className="text-ml">SOLIQ QOʻMITASI HUZURIDAGI FISKAL INSTITUT</p>
            </div>
          </div>
          <div className="text-center mb-3">
            <p className="text-ml">Sayt yaratildi:</p>
            <a href="https://github.com/NetMywork" target="_blank" rel="noopener noreferrer" className=" text-xl hover:underline">NetMyWork</a>
          </div>
          <div className="flex justify-center mb-3">
            {/* Insert the script tags as required */}
          </div>
          <div className="flex justify-center lg:w-1/4">
            <div className="flex space-x-3">
              <a href="https://www.youtube.com/channel/UCJwaJTJlz4d8f95KcEJ6y0A" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://t.me/fiskal_uz" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/fiskaluz" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/fiskalinstituti" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
}
export default Footer;
