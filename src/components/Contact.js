import React, { useState } from "react";
import emailjs from "emailjs-com";
import './styles/style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // تأكد من أن معرفات الخدمة والقالب والمستخدم صحيحة
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs
      .send("service_bg9e9p4", "template_s6rvgf6", templateParams, "8ptF85HxvsEx84ka7")
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error('Error:', error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };
    
  return (
    <section className="section" id="contact">
      <div className="top-header">
        <h1>Let's Work Together</h1>
        <span>Do you have a project in your mind? Contact me here</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>
              Find me <i className="uil uil-corner-right-down" />
            </h2>
            <p>
              <i className="uil uil-envelope" /> maysalkhalil02@gmail.com
            </p>
            <p>
              <i className="uil uil-phone" /> Phone: +962796532179
            </p>
          </div>
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="form-inputs">
              <input
                type="text"
                name="name"
                className="input-field"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="text-area">
              <input
                type="text"
                name="subject"
                className="input-subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="form-button">
              <button type="submit" className="btn">
                Send <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
 
export default Contact;
