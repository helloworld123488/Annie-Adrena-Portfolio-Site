import { useState } from "react";
import SocialIcons from "../components/SocialIcons";
import "./ContactPage.css";

const DEFAULT_API_URL = import.meta.env.DEV
  ? "http://localhost:5000"
  : "https://annie-adrena-portfolio-site-backend-five.vercel.app";

const rawApiUrl = import.meta.env.VITE_API_URL || DEFAULT_API_URL;
const API_URL = rawApiUrl.replace(/\/+$/, "");


export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    setError("");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        let message = "Unable to send message";
        try {
          const data = await response.json();
          message = data.error || message;
        } catch {
          // response wasn't JSON, ignore
        }
        throw new Error(message);
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError(err.message || "Unable to send message.");
    }
  };

  return (
    <div className="contact-page">
      <div className="wrap contact-page__inner">
        <div className="contact-page__intro">
          <p className="contact-page__eyebrow">Contact</p>
          <h1 className="contact-page__title">
            <em>Let&apos;s build a better workplace, together.</em>
          </h1>
          <p className="contact-page__sub">
            Open to HR Operations, HR Generalist and HR Business Partner roles. Send a note
            and I&apos;ll get back to you within a couple of days.
          </p>

          <div className="contact-page__meta">
            <div>
              <p className="contact-page__meta-label">Email</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adrenahr.solutions@gmail.com">
                adrenahr.solutions@gmail.com
              </a>
            </div>
            <div>
              <p className="contact-page__meta-label">Location</p>
              <p>Bangalore, India</p>
            </div>
          </div>

          <SocialIcons />
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <label className="contact-form__field">
            <span>Name</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={update("name")}
              placeholder="Your name"
            />
          </label>

          <label className="contact-form__field">
            <span>Email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={update("email")}
              placeholder="your email"
            />
          </label>

          <label className="contact-form__field">
            <span>Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="What would you like to talk about?"
            />
          </label>

          <button type="submit" className="contact-form__submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && (
            <p className="contact-form__note" role="status">
              Thanks — your message was sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="contact-form__note contact-form__note--error" role="status">
              Error sending message: {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}