import React, { useState } from "react";
import axios from "axios";

const StudentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    section: "",
    field: "",
    fees: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/students", formData);
      alert(" Student data saved successfully!");
    } catch (error) {
      console.error(error);
      alert(" Error saving student data.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-lg border border-white/30"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-black tracking-wide drop-shadow-md">
          ✨ Student Information
        </h2>

        <div className="mb-5">
          <label className="block mb-2 text-white font-semibold">Section</label>
          <input
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/70 focus:bg-white outline-none border border-gray-300 focus:border-blue-500 transition"
            placeholder="Enter Section"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-white font-semibold">Field</label>
          <input
            type="text"
            name="field"
            value={formData.field}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/70 focus:bg-white outline-none border border-gray-300 focus:border-purple-500 transition"
            placeholder="Enter Field (e.g. Science)"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-white font-semibold">Fees</label>
          <input
            type="number"
            name="fees"
            value={formData.fees}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/70 focus:bg-white outline-none border border-gray-300 focus:border-pink-500 transition"
            placeholder="Enter Fees"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-pink-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
