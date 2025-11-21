import React, { useState, useEffect, useRef } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    try {
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Failed to parse tasks from localStorage", error);
      return [];
    }
  });
  const [taskInput, setTaskInput] = useState('');
  const [selectedDay, setSelectedDay] = useState('sunday');
  const ref = useRef();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault()
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, id: Date.now(), day: selectedDay }]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
    <style>
      {
        `
        li::-webkit-scrollbar{
          width:0;
        }
        li:hover{
          background: var(--color-pink-200);
          transition:0.3s;
        }
        li{
          transition:0.3s;
        }
        `
      }
    </style>
    <form onSubmit={handleAddTask} className="flex flex-col items-center">
      <h1 className='mt-30 max-sm:mt-20 text-4xl font-bold text-pink-300 text-center'>We<span className='text-indigo-300'>Plan</span> - Easy to use planner.</h1>
      <h1 className='text-xl text-gray-500 mb-3'>You have {tasks.length} {tasks.length === 1 ? 'note' : 'notes'}.</h1>
      <div className="flex mb-4 gap-3 max-sm:flex-col">
        <select className='cursor-pointer outline-none' ref={ref} value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
        </select>
        <input
          type="text"
          className="border-1 border-gray-300 rounded p-1 caret-pink-300 outline-indigo-300"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          className="border-1 border-gray-300 p-1 rounded cursor-pointer shadow-sm active:shadow-none"
          onClick={handleAddTask}
          type='submit'
        >
          Add
        </button>
      </div>
      <ul className="text-center mb-3 grid lg:grid-cols-4 gap-3 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3">
        {tasks.map(task => (
          <li
            key={task.id}
            className="w-60 h-60 bg-pink-100 rounded-2xl flex p-3 items-center justify-center flex-col overflow-auto text-pretty"
            title={task.day}
          >
            <span className='mt-4'><span className='underline decoration-dotted bg-white p-1 rounded-lg'>{task.day}</span>: {task.text}</span>
            <button
              className="text-indigo-300 hover:text-red-700 font-bold cursor-pointer"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </form>
    </>
  );
};

export default Tasks;