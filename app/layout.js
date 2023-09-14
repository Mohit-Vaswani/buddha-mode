"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/layouts/Sidebar';
import './globals.css';

export default function RootLayout({ children }) {
  const [userName, setUserName] = useState('');
  const [isUserNameEntered, setIsUserNameEntered] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // Function to handle the user's name input
  const handleNameInput = (e) => {
    const inputValue = e.target.value;
    setUserName(inputValue);
    setIsSubmitDisabled(inputValue.trim() === ''); // Disable the button if the input is empty or only whitespace
  };

  // Function to handle the submission of the user's name
  const handleSubmit = () => {
    setIsUserNameEntered(true);
  };

  // Load the userName from localStorage when the component mounts
  useEffect(() => {
    const savedUserName = localStorage.getItem('userName');
    if (savedUserName) {
      setUserName(savedUserName);
      setIsUserNameEntered(true);
    }
  }, []);

  // Save the userName to localStorage when it changes
  useEffect(() => {
    if (userName) {
      localStorage.setItem('userName', userName);
    }
  }, [userName]);

  return (
    <html lang="en">
      <head>
        {/* Your metadata here */}
      </head>
      <body className="flex h-screen">
        {isUserNameEntered ? (
          // If the user has entered their name, display the main content
          <>
            <Sidebar userName={userName} />
            {children}
          </>
        ) : (
          // If the user hasn't entered their name, display a loader or welcome component
          <div className="flex flex-col items-center justify-center h-screen w-full">
            {isUserNameEntered ? (
              <p>Loading...</p>
            ) : (
              // Welcome component.
              <div className='userInput'>
                <Image src="/assets/Buddha.svg" alt="Buddha logo" width={170} height={170} />
                <h1>Welcome to Buddha Mode</h1>
                <p>Please enter your name:</p>
                <input type="text" value={userName} onChange={handleNameInput} className='border-2 bg-transparent' required />
                <button type='submit' onClick={handleSubmit} className="flex items-center justify-center cursor-pointer" disabled={isSubmitDisabled}>
                  <a className="relative text-lg inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-500 rounded-full group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">Enter</span>
                  </a>
                </button>
              </div>
            )}
          </div>
        )}
      </body>
    </html>
  );
}
