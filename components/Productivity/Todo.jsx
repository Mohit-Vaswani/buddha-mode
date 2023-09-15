import { useState, useEffect } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to local storage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="my-10 w-full flex items-center">
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress} // Add this line
          className="p-4 border bg-transparent outline-none w-8/12"
        />
        <button onClick={addTodo} className="ml-2 p-3 px-5 text-3xl bg-blue-500 text-white">
          +
        </button>
      </div>
      <ul className='pb-10'>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-6 py-3 flex justify-between border-b todo-item">
            <div className='flex items-center gap-2'>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="mr-2"
              />
              <span
                className={todo.completed ? 'line-through text-gray-500 text-xl' : 'text-xl'}
              >
                {todo.text}
              </span>
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="text-xl">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
