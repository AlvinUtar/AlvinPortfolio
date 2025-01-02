import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <div className='fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-md'>
      <div
        className={`${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } rounded-lg shadow-lg px-4 py-3 flex items-center justify-between gap-3 text-white transition-all duration-300 ease-in-out`}
        role='alert'
      >
        <span
          className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          }`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </span>
        <span className='text-sm font-medium'>{text}</span>
      </div>
    </div>
  );
};

export default Alert;