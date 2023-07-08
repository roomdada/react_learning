import './css/app.css';
import React, { useEffect, useState } from 'react';
import Picture from './components/Picture';

export default function  App() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('Je suis entrain d\'appendre REACT');

useEffect(() => {
  console.log('Le composant App est monté');
}, []);

const handleClick = () => {
  setShow(! show);
}

return (
    <div className='mt-4 m-8 '>
    <h2>{ title }</h2>
    <button onClick={handleClick} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cacher image</button>
        { show ? <Picture/>  : null }
    </div>
    );
}
