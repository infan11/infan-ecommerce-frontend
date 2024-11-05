import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { Button } from '@material-tailwind/react';

function SearchFilterComponent() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const axiosSecure = useAxiosSecure(null);

 

  useEffect(() => {
    axiosSecure.get('/addItems')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error("Error loading data:", error));
  }, []);


  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Your browser does not support speech recognition.</span>;
  }



  return (
    <div className="max-w-7xl mx-auto md:px-24">
      <div className="w-full max-w-sm min-w-[200px]">
        <div className="relative flex items-center">
          <div className="absolute flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 top-2.5 ml-3 text-slate-600">
              <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
              <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
            </svg>
            <div className="h-6 border-l border-slate-200 ml-2.5"></div>
          </div>

          <input
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-14 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

         
        </div>
      </div>

      <div className="mt-4">
        {filteredData.length > 0 ? (
          <ul>
            {filteredData.map((item) => (
              <li key={item.id} className="border-b border-slate-200 py-2">
                {item.name}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-500">No items found</p>
        )}
      </div>
    </div>
  );
}

export default SearchFilterComponent;
