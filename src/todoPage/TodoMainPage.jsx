import React from 'react';

import Navbar from '../dashboardComponent/Navbar';
import TaskList from '../dashboardComponent/TaskList';
import Sider from '../dashboardComponent/Sider';
import InputData from '../dashboardComponent/InputData';

const TodoMainPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sider />
      <div className="flex-1 p-6 overflow-y-auto">
        <Navbar />
        <TaskList />
        <div className="mt-8">
          <InputData />
        </div>
      </div>
    </div>
  );
};

export default TodoMainPage;
