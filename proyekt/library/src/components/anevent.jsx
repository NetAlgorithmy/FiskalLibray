import React, { useRef, useEffect} from 'react'
import logo from '../assets/logo.png'
import Navbar from './sidebar'
import OneBook from '../eventsid'
import AudioBooks from '../audiobook'
import Work from '../Work'
import Event from '../event'
import Article from '../Article'

function AnEvent() {
  return (
    <div className='flex flex-col h-screen w-full inline-block '>
      <Navbar />
      <div className='inline-block  px-4 py-4 w-full'>
        <OneBook className='inline-block' />
      </div>
      <div className='inline-block  px-4 py-4 w-full'>
      <Event className='inline-block'/>
      </div>
    </div>
  );
}
export default AnEvent;