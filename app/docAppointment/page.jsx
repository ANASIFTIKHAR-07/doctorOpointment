

"use client"

import React, { useState } from 'react';
import { FaUser, FaClock, FaCheck } from 'react-icons/fa';

const AppointmentForm = () => {
  // State variables
  const [formData, setFormData] = useState({
    name: '',
    timeOfDay: 'morning', // Default value is 'morning'
    status: false, // Default value is false
  });

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access formData.name, formData.phoneNumber, formData.timeOfDay, formData.status for form data
    // Do something with the data, e.g., send it to a server
  };

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Event handler for toggling status button
  const toggleStatus = () => {
    setFormData({
      ...formData,
      status: !formData.status,
    });
  };


  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            <FaUser className="inline mr-2" />
            Full Name
          </label>
          <div className="mt-1">
            <div className="rounded-md shadow-sm">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                placeholder="Enter Your Full Name"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="timeOfDay" className="block text-sm font-medium text-gray-600">
            <FaClock className="inline mr-2" />
            Preferred Time of Day
          </label>
          <div className="mt-1">
            <select
              id="timeOfDay"
              name="timeOfDay"
              value={formData.timeOfDay}
              onChange={handleChange}
              className="form-select py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            >
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="status"
              name="status"
              checked={formData.status}
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue-500 transition duration-150 ease-in-out"
            />
            <label
              htmlFor="status"
              className="ml-2 block text-sm font-medium text-gray-600 cursor-pointer"
              onClick={toggleStatus}
            >
              <FaCheck className="inline mr-2" />
              Status: {formData.status ? 'Active' : 'Inactive'}
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-red-400 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Schedule Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;