import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import "./Contact.css"; // Import your CSS file

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false); // To handle submission

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jo6qadm",
        "template_oa9krzt",
        form.current,
        "tyV8gZzfyVAIHuH7x"
      )
      .then(
        (result) => {
          // console.log(result.text);
          // alert("Message sent");
          form.current.reset(); // Reset the form after submission
          setIsSubmitted(true); // Show the success message
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="ContactContainer">
      <a className="anchor" id="Contact"></a>
      <div className="ContactImage">
        <img src="./contact-form.webp" alt="Contact Us" />
      </div>
      <div className="StyledContactForm">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" />
        </form>

        {isSubmitted && (
          <div className="SuccessMessage" onClick={() => setIsSubmitted(false)}>
            🎉 Message Sent Successfully! 🎉
          </div>
        )}
      </div>
      <div className="ContactText">
        <h2>Get in Touch</h2>
        <p>
          We would love to hear from you! Whether you have a question, feedback,
          or just want to say hello, feel free to reach out using the form on
          the left. Our team is here to assist you.
        </p>
        <h2>📞 +251964537304</h2>
        <h2>
          {" "}
          Telegram📱
          <a href="https://t.me/Rihmak" target="_blank" class="text-orange-500">
            {" "}
            Click here
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
