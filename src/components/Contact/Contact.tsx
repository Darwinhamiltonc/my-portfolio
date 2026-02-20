import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { translations } from "../../Data/Translations";
import type { Language } from "../../Data/Translations";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  language: Language;
};

function ContactForm({ language }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        "service_fcbx2t5",
        "template_xuwowvc",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "ULfwuSwrUlXf_kOHi",
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="contact-title">
          {translations[language].navBar.contact}
        </h2>

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

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p className="success-message">✅ Message sent successfully!</p>
        )}

        {status === "error" && (
          <p className="error-message">❌ Something went wrong. Try again.</p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;

// template ID: template_xuwowvc
// service ID: service_fcbx2t5
// public key: ULfwuSwrUlXf_kOHi
