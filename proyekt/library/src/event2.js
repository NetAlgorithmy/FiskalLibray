import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import 'swiper/less/scrollbar';

function Event(props) {
  const [data, setData] = useState([]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/fiskal/events/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, []);

  // render the component using the fetched data
  return (
    <div className='bg-white'>
      <div className='container mx-auto'>
        <div className="">
          <h1 className="text-blue-600 font-medium text-2xl items-center text-center ">
          Events
        </h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            className="mySwiper"
            autoplay={true}
          >
            <div className="grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
              {data.map((data,i) => (
                <SwiperSlide key={i}>
                  <div>
    <div className="max-w-screen-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <div className="px-6 py-4">
        {data.cover_video &&
  <video className="block mx-auto    h-64  w-96  md:h-96 rounded-lg object-cover object-center" controls>
    <source src={data.cover_video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
} {data.cover_image &&
  <img className="block mx-auto h-64  w-96  rounded-lg object-cover object-center" src={data.cover_image} alt={data.title} />
}
          <div className="mt-4  text-center ">
            <h1 className="text-4xl font-medium mb-2">{data.title}</h1>
            <div className="text-gray-900 leading-normal mb-4 leading-relaxed">
              <p>{data.body}</p>
            </div>
            <div className="text-gray-600 leading-normal">
              <p>Published on {formatDate(data.publication_date)}</p>
            </div>
          
          </div>
          </div>
      
      </div>
      </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        
      </div>
    </div>
  );
}

export default Event;
