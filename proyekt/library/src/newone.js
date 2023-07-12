import axios from 'axios';
import { useEffect, useState } from 'react';

function PostToken() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const requestData = { token: token };

    axios.post('http://127.0.0.1:8000/fiskal/wish/', requestData)
      .then((response) => {
        const serializedData = response.data;
        const userObject = JSON.parse(serializedData);
        setData(userObject);
        console.log(userObject[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item) => (
        <div key={item.pk} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <img className="h-44 sm:h-96 w-full object-cover" src={"http://127.0.0.1:8000/media/"+item.fields.cover_image} alt={item.fields.title} />
          </div>
          <div className="flex-1 p-4 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{item.fields.title}</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{item.fields.author}</p>
            <div className="mt-4">{/* Render your Rate component or code here */}</div>
            <div className="mt-6">
              <a href={`/${item.fields.tip}/${item.pk}`} className="text-base font-medium text-blue-500 hover:text-blue-400">
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostToken;
