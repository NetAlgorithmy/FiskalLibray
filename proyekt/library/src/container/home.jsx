import React, { useRef, useEffect} from 'react'
import logo from '../assets/logo.png'
import { HiMenu } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/sidebar'
import Books from '../get'
import AudioBooks from '../audiobook'
import Work from '../Work'
import Event from '../event'
import Article from '../Article'
import axios from 'axios';
import Footer from '../components/footer'
function home() {
  return (
    <div className='flex flex-col h-screen w-full inline-block '>
      <Navbar />
      <div className='inline-block  px-4 py-4 w-full '>
      <Event className='inline-block'/>
      </div>
      <div className='inline-block  px-4 py-4 w-full '>
      <Article className='inline-block'/>
      </div>
      <div className='inline-block  px-4 py-12 w-full '>
        <Books className='inline-block' />
      </div>
      <div className='inline-block  px-4 py-4 w-full '>
      <AudioBooks className='inline-block'/>
      </div>
      <div className='inline-block  px-4 py-4 w-full '>
      <Work className='inline-block'/>
      </div>
      <Footer/>
    </div>
  );
}



export default home
