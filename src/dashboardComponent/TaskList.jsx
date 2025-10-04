import React from 'react';

const taskList = ["Total Task", "Completed Task", "Pending Task"]

const TaskList = () => {
  return (
    <ul className="flex flex-col sm:flex-row gap-6">
      {taskList.map((item, index) => (
        <li 
          key={index} 
          className="flex-1 h-28 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center text-white text-lg font-semibold rounded-lg shadow-md hover:scale-105 transform transition"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default TaskList;
