import React, { Component, useEffect, useState } from 'react'

export default function Picture() {
const [ myTimer, setMyTimer ] = useState(null);
const [images , setImages] = useState(['img.jpg', 'img2.jpg', 'img3.jpg']);

const addImage = () => {
  setImages([...images, 'img4.jpg']);
}

function ImagesComponent(){
  return images.map((name) => {
   return (
    <div>
     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <img className="rounded-t-lg" src={name} alt="" />
      </a>
       <div className="p-5">
           <a href="#">
               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Titre</h5>
           </a>
           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
           <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Lire plus
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
               </svg>
           </a>
       </div>
   </div>
    </div>

   );
  })
}

 useEffect(() => {
   const myTimer = setInterval(() => {
     console.log('Le composant Picture est monté')
   }, 1000);
   return () =>  clearInterval(myTimer);
 }, []);
  return (
   <div>
    <button onClick={addImage} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Ajouter image</button>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-8'>
      <ImagesComponent/>
   </div>
   </div>
  )
}
