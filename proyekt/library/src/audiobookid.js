import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import Tag from './tag';
import axios from 'axios';
  
  function StarRating({ onSubmit }) {
    const [rating, setRating] = useState(null);
  
    const handleClick = (value) => {
      setRating(value);
    }
  
    const handleRate = () => {
      onSubmit(rating);
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
        <button onClick={handleRate} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 ml-5">Rate</button>
      </div>
    );
  };
  function OneBook(props) {
    const [data, setData] = useState(null);
    const handleWish = () => {
      const bookId = window.location.pathname.split('/').pop();
    
    
      const userData = { token: localStorage.getItem('access_token') };
    
      axios.post('http://127.0.0.1:8000/api/check-authenticated/', userData)
        .then((response) => {
          const serializedData = response.data;
          const userObject = JSON.parse(serializedData)[0];
          console.log(userObject&&userObject.pk);
    
          if (userObject !== 'Login') {
            axios.post('http://127.0.0.1:8000/fiskal/wish/create/', {
              user: userObject.pk,
              content_type: 8,
              object_id: bookId,
              
              
            }, {
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then(response => {
                // Wish added successfully
                console.log('Wish added successfully');
              })
              .catch(error => {
                // Error occurred while adding the wish
                console.error('Failed to add wish:', error);
              })
              
          }
        })
        .catch((error) => {
          // Error occurred while checking authentication
          console.error('Failed to check authentication:', error);
        });
        window.location.reload();
    };
  
    const handleSubmit = (rating) => {
      const bookId = window.location.pathname.split('/').pop();
      fetch(`http://127.0.0.1:8000/fiskal/rates/create/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    content_type: 8, // Replace with the primary key value of the ContentType object
    object_id: bookId,
    rating: rating
  })
})
.then(response => {
  if (response.ok) {
    // Refresh the page to show the new rating
    window.location.reload();
  } else {
    response.json().then(data => console.log(data));
  }
})
.catch(error => console.error(error));

    }
  
  
  
  
  
  
  useEffect(() => {
    const bookId = window.location.pathname.split('/').pop();
    fetch(`http://127.0.0.1:8000/fiskal/audiobooks/${bookId}`)
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

  

  return (
    
    <div>
    <div>
    <div className="max-w-screen-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-8">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img className="block mx-auto sm:mx-0  sm:flex-shrink-0 h-64  w-96 sm:h-80 md:h-96 rounded-lg sm:rounded-full object-cover object-center" src={data.cover_image} alt={data.title} />
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
              <a href={data.book} target="_blank" rel="noreferrer" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Read Now</a>
            </div>
            <div className='flex p-6'>
            <StarRating onSubmit={handleSubmit} />
            <button className='hidden sm:inline-block ml-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300' onClick={handleWish}>wish</button>
          </div>
          <button className='inline-block sm:hidden ml-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300' onClick={handleWish}>wish</button>

          </div>
          </div>
      
      </div>
      <div className='m-4 '>
      <Tag tag={data.tag.id} className='m-4'/>
      </div>
      </div>
      
      </div>
  );}
export default OneBook;
