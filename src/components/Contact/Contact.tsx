import { useState } from "react";
import "./Contact.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="contact-title">Contact</h2>

        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send message</button>
      </form>
    </section>
  );
}

export default ContactForm;
