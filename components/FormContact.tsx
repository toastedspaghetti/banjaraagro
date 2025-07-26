"use client";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { CiCircleCheck } from "react-icons/ci";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha(); // ✅ Call it here

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (!executeRecaptcha) {
    //   setStatus("reCAPTCHA not ready");
    //   return;
    // }

    if (!executeRecaptcha) {
      console.warn("executeRecaptcha not ready");
      setStatus("reCAPTCHA not ready");
      return;
    }

    const token = await executeRecaptcha("contact_form_submit");

    try {
      console.log("reCAPTCHA token:", token);
      setIsSubmitting(true);
      // setStatus("Sending...");

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken: token }),
      });

      if (res.ok) {
        // setStatus("Email sent!");
        setForm({ firstName: "", lastName: "", email: "", message: "" });
        setIsSubmitted(true);
      } else {
        setStatus("Failed to send email.");
        setIsSubmitted(false);
      }
    } catch {
      setStatus("Something went wrong.");
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formClass = [
    "form contact",
    isSubmitting ? "form--submitting" : "",
    isSubmitted ? "form--submitted" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <form className={formClass} onSubmit={handleSubmit}>
      <div className="row double-column-row">
        <div className="form-field">
          <label className="form-label" htmlFor="firstName">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Name"
            className="form-input"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="lastName">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="form-field">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="form-field">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            className="form-textarea"
            required
          />
        </div>
      </div>
      <div className="row submit">
        <div className="form-field form-submit-container">
          <button
            type="submit"
            className="form-btn submit btn btn-primary btn-curve"
            disabled={isSubmitting}
          >
            Submit
          </button>
          <div className="circular-loader"></div>
          <CiCircleCheck/>
          <p>{status}</p>
        </div>
      </div>
    </form>
  );
}
