import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

function OneBook(props) {
  const [data, setData] = useState(null);
  const StarRating = () => {
  const [rating, setRating] = useState(null);

  const handleClick = (value) => {
    setRating(value);
  }

  return (
    <div className='flex'>
  {[...Array(5)].map((_, index) => {
    const starValue = index + 1;
    return (
      <div className='flex flex-col items-center justify-center mx-1' key={starValue}>
        <span className={`text-4xl cursor-pointer ${starValue <= rating ? 'text-yellow-500' : 'text-gray-400'}`} onClick={() => handleClick(starValue)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1l3.09 6.45 7.01.96-5.05 4.93 1.19 6.92L12 17.25l-6.24 3.52 1.19-6.92L1.9 8.41l7.01-.96L12 1z" />
          </svg>
        </span>
        <span className='text-sm font-medium text-gray-500'>{starValue}</span>
      </div>
    );
  })}
</div>

  );
};
  useEffect(() => {
    const bookId = window.location.pathname.split('/').pop();
    fetch(`http://127.0.0.1:8000/fiskal/events/${bookId}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
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
  

  return (
    <div className="max-w-screen-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8">
      {data.map((data) => (
        <div className="sm:flex sm:items-center px-6 py-4">
          <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-64  w-96 sm:h-80 md:h-96 rounded-lg sm:rounded-full object-cover object-center" src={data.cover_image} alt={data.title} />
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <h1 className="text-4xl font-medium mb-2">{data.title}</h1>
            <p className="text-lg text-gray-600 mb-4">By {data.author}</p>
            <div className="mb-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.tag.tag}</span>
            </div>
            <div className="text-gray-900 leading-normal mb-4 leading-relaxed">
              <p>{data.description}</p>
            </div>
            <div className="text-gray-600 leading-normal">
              <p>Published on {formatDate(data.publication_date)}</p>
            </div>
            <div className="mt-4">
  <h2 className="text-2xl font-medium mb-2">Ratings</h2>
  {Rate(data.ratings)}
</div>
<div className="mt-4">
              <a href={data.book} target="_blank" rel="noreferrer" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Read Now</a>
            </div>
            <div className='flex'>
  <h2 className="text-2xl font-medium mb-2">Rate this book</h2>
  <StarRating />
</div>
          </div>
          </div>
      ))}
      </div>
  );}
export default OneBook;
