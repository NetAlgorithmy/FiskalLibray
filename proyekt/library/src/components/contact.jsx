import React from 'react';
import {  FaYoutube, FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import image1 from '../assets/123.jpg';
import Navbar from './sidebar'
import Footer from './footer';

const Contact = () => {
  return (
    <div className='flex flex-col h-screen w-full inline-block '>
      <Navbar />
    <div className="bg-gray-100">
        <div className="row">
                <div className="col-lg-8 col-12 map_holder">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16513.908851923545!2d69.19477200368185!3d41.301395069594506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x19a5de40884ba160!2zNDHCsDE4JzA1LjAiTiA2OcKwMTEnMzUuNyJF!5e0!3m2!1sen!2s!4v1655357813535!5m2!1sen!2s" height="300" width="100%"  loading="lazy"></iframe>
                </div>
            </div>
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium text-gray-900 ">Address</h3>
            <div className="mt-2 text-gray-600">
              <p>Фискальный институт (O‘zbekiston Respublikasi davlat soliq qo‘mitasi huzuridagi fiskal insituti)
Университет в Ташкенте
Адрес: 852R+9M2, Tashkent 100173</p>
              <p>Часы работы: 
среда	24 часа в сутки
четверг	24 часа в сутки
пятница	24 часа в сутки
суббота	24 часа в сутки
воскресенье	Закрыто
понедельник	24 часа в сутки
вторник	24 часа в сутки
Телефон: +998 71 230 90 07
</p>
            </div>
          </div>
          <div className=''>
            <h3 className="text-lg font-medium text-gray-900 text-center">Follow Us</h3>
            <div className="mt-2 flex justify-center ">
              <a href="https://t.me/fiskal_uz" className="mr-4">
                <FaTelegram size={24} className="text-blue-500" />
              </a>
              <a href="https://instagram.com/fiskal.uz?igshid=YmMyMTA2M2Y" className="mr-4">
                <FaInstagram size={24} className="text-pink-500" />
              </a>
              <a href="https://fiin.uz/" className="text-gray-600">
                Official Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    </div>
  );
};

export default Contact;
