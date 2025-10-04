import React, { useContext } from "react";
import { ContextAPI } from "./ContextAPi";

const InputData = () => {
  const { input, InputControll, list, addList, dellBtn, editBtn } = useContext(ContextAPI);

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center gap-3 p-4 bg-white shadow-md rounded-lg">
        <input
          value={input}
          onChange={InputControll}
          type="text"
          placeholder="Enter task"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={addList}
          className="px-5 py-2 bg-indigo-700 text-white font-medium rounded-lg hover:bg-indigo-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="mt-5 space-y-3">
        {list.map((item) => (
          <li
            key={item.id}
            className="w-full p-3 bg-indigo-50 border border-gray-200 rounded-lg flex justify-between items-center shadow-sm"
          >
            <span className="font-medium text-gray-800">{item.text}</span>
            <div className="space-x-2">
              <button
                onClick={() => dellBtn(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
              <button
                onClick={() => editBtn(item.id, prompt('Enter new text:'))}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputData;
