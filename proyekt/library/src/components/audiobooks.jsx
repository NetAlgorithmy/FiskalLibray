import React, { useRef, useEffect} from 'react'
import logo from '../assets/logo.png'
import { HiMenu } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Navbar from './sidebar'
import Books from '../get'
import AudioBooks from '../audiobook'
import Work from '../Work'
import Event from '../event'
import Article from '../Article'

function Audio() {
  return (
    <div className='flex flex-col h-screen w-full inline-block '>
      <Navbar />
      <div className='inline-block  px-4 py-12 w-full '>
        <AudioBooks className='inline-block' />
      </div>
      <div className='inline-block  px-4 py-4 w-full '>
      <Event className='inline-block'/>
      </div>
    </div>
  );
}
export default Audio;