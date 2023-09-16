import { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri'

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');

  // Load notes from local storage on component mount
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  // Save notes to local storage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (note.trim() !== '') {
      setNotes([...notes, { id: Date.now(), text: note }]);
      setNote('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addNote();
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <div className="my-10 w-full flex items-center">
        <input
          type="text"
          placeholder="Add a note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyPress={handleKeyPress} // Add this line
          className="p-4 border bg-transparent outline-none w-8/12"
        />
        <button onClick={addNote} className="ml-2 p-3 px-5 text-3xl bg-blue-500 text-white">
          +
        </button>
      </div>
      <ul className='pb-10'>
        {notes.map((note) => (
          <li key={note.id} className="mb-6 p-5 flex justify-between border note-item relative">
            <div className='flex items-center gap-2'>
              <span
                className="text-xl"
              >
                {note.text}
              </span>
            </div>
            <button onClick={() => deleteNote(note.id)} className="text-xl absolute bottom-0 right-0 m-3">
              <RiDeleteBin6Line/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
