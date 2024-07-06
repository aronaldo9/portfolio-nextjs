"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario (e.g., enviarlo a un servidor)
    console.log("Formulario enviado:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 space-y-4 bg-white rounded-lg shadow-md"
    >
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-medium text-white bg-secondary rounded-md hover:bg-secondary/75"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
