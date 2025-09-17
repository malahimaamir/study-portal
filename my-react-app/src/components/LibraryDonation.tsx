import { useState } from "react";
import axios from "axios";

export default function LibraryDonation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    bookTitle: "",
    author: "",
    quantity: "",
  });

  const [status, setStatus] = useState<{ message: string; type: "success" | "error" | "" }>({
    message: "",
    type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ message: "Submitting...", type: "" });

    try {
      const res = await axios.post("http://localhost:5000/api/donations", formData);
      setStatus({ message: res.data.message || "Donation submitted successfully!", type: "success" });

      setFormData({
        name: "",
        email: "",
        age: "",
        bookTitle: "",
        author: "",
        quantity: "",
      });
    } catch (err) {
      setStatus({ message: "Error submitting donation. Please try again.", type: "error" });
      console.log("error", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Library Donation Form
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Donate your books and help spread knowledge!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Your Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="text"
            name="bookTitle"
            placeholder="Book Title"
            value={formData.bookTitle}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Donate Now
          </button>
        </form>

        {status.message && (
          <p
            className={`mt-4 text-center font-medium ${
              status.type === "success"
                ? "text-green-600"
                : status.type === "error"
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
}
