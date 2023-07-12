import React, { useRef, useEffect} from 'react'
import Navbar from './sidebar'
import One from '../forworks'

import Event from '../event'


function Alpha() {
  return (
    <div className='flex flex-col h-screen w-full inline-block '>
      <Navbar />
      <div className='inline-block  px-4 py-4 w-full'>
        <One className='inline-block' />
      </div>
      <div className='inline-block  px-4 py-4 w-full'>
      <Event className='inline-block'/>
      </div>
    </div>
  );
}
export default Alpha;