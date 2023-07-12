import { useState, useEffect } from 'react';
import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FaStar } from 'react-icons/fa';

SwiperCore.use([Navigation, Pagination]);



function AudioBo(props) {
  const [data, setData] = useState([]);
  const Rate = ( ratings ) => {
    let sum = 0;
    let count = 0;
  
    for (let i = 0; i < ratings.length; i++) {
      sum += parseFloat(ratings[i].rating);
      count += 1;
    }
    if (sum === 0 && count === 0){
      sum = 1;
      count = 1;
    }
    const average = sum / count;
    const roundedAverage = Math.round(average * 2) / 2; // round to nearest 0.5
  
    const stars = [];
  
    for (let i = 0; i < roundedAverage; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
  
    return (
      <div className="mb-4">
        <div className="flex">{stars}</div>
        <p className="text-gray-900 leading-normal mb-1">{roundedAverage} stars</p>
      </div>
    );
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/fiskal/audiobooks/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, []);

  // render the component using the fetched data
  return (


    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {data.map((item) => (
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden ">
        <div className="flex-shrink-0">
          <img className=" h-44 sm:h-96 w-full object-cover" src={item.cover_image} alt={item.title} />
        </div>
        <div className="flex-1 p-4 bg-white dark:bg-gray-800">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">{item.title}</h3>
          <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{item.author}</p>
          <div className="mt-4">
  {Rate(item.ratings)}
</div>
          <div className="mt-6">
          <a href={`/audiobook/${item.id}`} className="text-base font-medium text-blue-500 hover:text-blue-400">
              Read more
            </a>
          </div>
        </div>
      </div>
    ))}
    </div>
    
  );
  }

export default AudioBo;