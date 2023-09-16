
import React, { useEffect, useState } from 'react';
import Quote from './Quotes';

const All = () => {
  // Create state variables to store counts
  const [noteCount, setNoteCount] = useState(0);
  const [todoCount, setTodoCount] = useState(0);

  // Use useEffect to fetch counts from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];

    // Update the state variables with the counts
    setNoteCount(storedNotes.length);
    setTodoCount(storedTodos.length);
  }, []);

  return (
    <div className='flex flex-wrap md:flex-nowrap gap-8 mt-10 allSection'>
      <div className="card">
        <h2 className='text-2xl'>Notes</h2>
        <p className='text-3xl'>{noteCount}</p>
      </div>
      <div className="card">
        <h2 className='text-2xl'>Todos</h2>
        <p className='text-3xl'>{todoCount}</p>
      </div>
      <Quote/>
    </div>
  );
};

export default All;
