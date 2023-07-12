import React, { useRef, useEffect} from 'react'
import Navbar from './sidebar'
import AudioBo from '../foraudios';

import Event from '../event'


function ABo() {
  return (
    <div className='flex flex-col h-screen w-full inline-block '>
      <Navbar />
      <div className='inline-block  px-4 py-4 w-full'>
        <AudioBo className='inline-block' />
      </div>
      <div className='inline-block  px-4 py-4 w-full'>
      <Event className='inline-block'/>
      </div>
    </div>
  );
}
export default ABo;