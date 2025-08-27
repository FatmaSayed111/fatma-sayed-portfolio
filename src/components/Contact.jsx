import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6iakf9f",     
        "template_9s4y91h",   
        form.current,
        "x4zwjJCsf-ygENqKZ" 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");
          e.target.reset(); 
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <section id="contact" className="section container">
      <h1 className="heading">Contact</h1>
      <p className="mt-4 text-slate-400 text-center">
        Feel free to reach out to me through the form or my social profiles:
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-slate-900 shadow-lg rounded-2xl p-6 space-y-4"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full border border-slate-700 bg-slate-800 text-white p-3 rounded-lg"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full border border-slate-700 bg-slate-800 text-white p-3 rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full border border-slate-700 bg-slate-800 text-white p-3 rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-slate-900 shadow-lg rounded-2xl p-6 text-slate-300 space-y-4">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:fatma1.sayed12@gmail.com"
              className="text-emerald-400"
            >
              fatma1.sayed12@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/your-username"
              className="text-emerald-400"
            >
              linkedin.com/in/your-username
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/your-username"
              className="text-emerald-400"
            >
              github.com/your-username
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
