import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./styles/style.css";
import { Helmet } from "react-helmet";
import { useContent } from "../content/ContentContext";

const Contact = () => {
  const { content, getLocalized, getSectionStyle } = useContent();
  const { contact } = content;
  const sectionStyle = getSectionStyle("contact");
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
    <div>
      <Helmet>
        <title>Contact Me - Mays' Portfolio</title>
        <meta
          name="description"
          content="Get in touch with Mays to discuss projects, collaborations, or for any inquiries. Reach out through email or fill out the contact form."
        />
        <meta
          name="keywords"
          content="Contact, Web Developer, Mays Portfolio, Contact Form, Web Development, JavaScript, React, Reach out"
        />
      </Helmet>

      <section
        className="section"
        id="contact"
        style={{
          "--text-color": sectionStyle.text,
          "--body-color": sectionStyle.background,
          backgroundColor: sectionStyle.background,
          color: sectionStyle.text,
        }}
      >
        <div className="top-header">
          <h1>{getLocalized(contact.title)}</h1>
          <span>{getLocalized(contact.subtitle)}</span>
        </div>
        <div className="row">
          <div className="col">
            <div className="contact-info">
              <h2>
                Find me <i className="uil uil-corner-right-down" />
              </h2>
              <p>
                <i className="uil uil-envelope" /> {contact.email}
              </p>
              <p>
                <i className="uil uil-phone" /> Phone: {contact.phone}
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
    </div>
  );
};
 
export default Contact;
