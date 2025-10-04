import React from 'react';

const Sider = () => {
  const menuItems = ["Home", "Settings", "Analytics"];

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col p-5 h-screen shadow-lg">
      <h2 className="text-2xl font-bold mb-8">Menu</h2>
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="hover:bg-gray-700 px-4 py-2 rounded cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sider;
