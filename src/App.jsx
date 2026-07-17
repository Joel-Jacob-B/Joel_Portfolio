import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import profilePic from "./assets/Joel Jacob B.png";
import graspearLogo from "./assets/GraspearLogo.webp";
import lokeyAILogo from "./assets/lokeyAI.jpeg";
import systemtronLogo from "./assets/systemtron.png";
import co2 from "./assets/co2.png";
import climatesnapshot from "./assets/climatesnapshot.png";
import xipad from "./assets/xipad.png";
import programmingLang from "./assets/programmingLang.png";
import frontend from "./assets/frontend.png";
import tools from "./assets/tools1.png";
import flutter from "./assets/flutter.png";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaLocationArrow, FaMapPin } from "react-icons/fa";

import "./App.css";

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

export default function Portfolio() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ed54xx1", // Replace with your EmailJS service ID
        "template_gjrich6", // Replace with your EmailJS template ID
        form.current,
        "8V_qUtofFk4zQu_Mc" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="font-inter scroll-smooth">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-brand">
            Joel Jacob B
          </a>
          <div className="navbar-links">
            {["About", "Education", "Skills", "Projects", "Internships", "Contact"].map(
              (item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
  <div className="hero-left">
    <img
      src={profilePic}
      alt="Profile"
      className="profile-pic-large"
    />
  </div>
  <div className="hero-right">
  <motion.h1
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="hero-greeting"
    style={{ fontWeight: "600"}}>
    Hey, I'm glad you're here <span role="img" aria-label="sparkles" fontSize="40px">👋</span>
  </motion.h1>
  <motion.h2
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8, delay: 0.1 }}
    className="hero-title"
    style={{ color: "#00C6FF", fontWeight: "700"}}>
    Joel Jacob B
  </motion.h2>
  <motion.h2
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8, delay: 0.2 }}
    className="hero-role"
    style={{ color: "#ffffffff"}}>
    Aspiring Mobile &amp; Web Developer
  </motion.h2>
  <motion.h3
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8, delay: 0.3 }}
    className="hero-desc"
    style={{color: "#ddd", maxWidth: "28rem" }}>
    I aim to build great mobile and web apps, grow my skills, and collaborate with others to create meaningful digital experiences.
  </motion.h3>
  <div className="hero-socials">
  <a href="https://github.com/Joel-Jacob-B" target="_blank" rel="noopener noreferrer" className="hero-icon">
    <FaGithub size={28} />
  </a>
  <a href="https://www.linkedin.com/in/joel-jacob01/" target="_blank" rel="noopener noreferrer" className="hero-icon">
    <FaLinkedin size={28} />
  </a>
  <a href="https://instagram.com/itzzz_me_joe" target="_blank" rel="noopener noreferrer" className="hero-icon">
    <FaInstagram size={28} />
  </a>
  <a href="mailto:joeljacob210@gmail.com" target="_blank" rel="noopener noreferrer" className="hero-icon">
    <FaEnvelope size={28} />
  </a>
</div>

  <div className="hero-buttons">
    <a
      href="/JOEL JACOB B_CSE_312822104045_AGNI.pdf"
      className="btn primary-btn"
      download
    >
      Download CV
    </a>
    <a href="#contact" className="btn secondary-btn">
      Contact Me
    </a>
  </div>
</div>

</section>



      {/* About Section */}
      <Section id="about" title="About Me" >
        <motion.div className="section-content" initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}>
          <p className="secondary-text">I’m a Computer Science Engineering student at Agni College of Technology, passionate about blending creativity with technology. My primary focus lies in Flutter and MERN stack web development, delivering efficient, scalable, and visually appealing applications.</p>
          
        </motion.div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education">
        <motion.div className="section-content education-list" initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}>
          <div className="education-item">
            <h3>B.E Computer Science and Engineering</h3>
            <p className="secondary-text">Agni College of Technology (2022 – Present)</p>
            <p className="secondary-text">CGPA: 9.08</p>
          </div>
          <div className="education-item">
            <h3>HSC in Computer Science with Maths</h3>
            <p className="secondary-text">M.C.C Higher Secondary School (2021 – 2022)</p>
            <p className="secondary-text">Percentage: 85.67%</p>
          </div>
        </motion.div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills">
        <div className="skills-grid" >
          {[
            {
              img: programmingLang,
              mainHeading: "Programming Languages",
              subHeading: "Java, Python, C",
              description:
                "Currently learning Java, Python, and C with a focus on OOP and problem-solving concepts.",
            },
            {
              img: frontend,
              mainHeading: "Web Technologies",
              subHeading: "HTML, CSS, JavaScript, React.js",
              description:
                "Building skills in creating responsive web apps using HTML, CSS, JavaScript, and React.js.",
            },
            {
              img: flutter,
              mainHeading: "App Development",
              subHeading: "Flutter",
              description:
                "Working on cross-platform app development using Flutter with attention to UI and performance.",
            },
            {
              img: tools,
              mainHeading: "Database and Tools",
              subHeading: "Figma, SpringBoot, PostmanAPI, Git, MySQL",
              description:
                "Gaining practical experience in databases, version control, backend development, and API testing.",
            },
          ].map((skill) => (
            <motion.div
              key={skill.mainHeading}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="skill-item"
            >
              <img src={skill.img} className="project-image" alt="Project Image" width={300} height={100}/>
              <h3 className="skill-Head">{skill.mainHeading}</h3>
              <p className="skill-Techs"><b>{skill.subHeading}</b></p>
              <p className="skill-desc">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="projects-grid" >
          {[
            {
              img: co2,
              name: "Web Application to Quantify Carbon Footprint",
              desc: "Developed a web system to calculate carbon footprints and suggest emission reduction strategies.",
              tech: "HTML, CSS, JavaScript",
            },
            {
              img: climatesnapshot,
              name: "ClimateSnapshot – A Week of Weather Insights",
              desc: "Built a weather app fetching past week’s temperature, humidity, and wind data.",
              tech: "HTML, CSS, JavaScript, Chart.js",
            },
            {
              img: xipad,
              name: "Athletes Performance Visualizer",
              desc: "Flutter app visualizing athlete performance data using Syncfusion charts.",
              tech: "Flutter, Syncfusion Charts",
            },
          ].map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="project-item"
            >
              <img src={p.img} className="project-image" alt="Project Image" width={200} height={200}/>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <p className="project-tech">Tech Used: {p.tech}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Internships Section */}
      <Section id="internships" title="Internships">
        <div className="internship-list">
          {[
            {
              logo: graspearLogo,
              title: "Product Development Intern – Graspear Solutions Pvt Ltd",
              date: "Apr 2025 – Oct 2025",
              desc: "Frontend product development using Flutter with interactive UI components.",
              link: "https://www.linkedin.com/company/graspear"
            },
            {
              logo: lokeyAILogo,
              title: "Full Stack Developer Intern – Lokey AI",
              date: "Oct 2023 – Apr 2024",
              desc: "Worked with React.js, Node.js, Express, and MongoDB for modern web apps.",
              link: "https://www.linkedin.com/company/lokeyfuturetechnologies"
            },
            {
              logo: systemtronLogo,
              title: "AI/ML Intern – SystemTron",
              date: "Mar 2024",
              desc: "Implemented Random Forest and KNN models for classification tasks.",
              link: "https://www.linkedin.com/company/systemtron"
            },
          ].map((intern) => (
            <motion.div key={intern.title} whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: 'easeOut' }} className="internship-item">
              <a href={intern.link} target="_blank"><img src={intern.logo} alt="Company Logo" className="company-logo" style={{ width: "90px", marginBottom: "10px" }} /></a>

              <h3>{intern.title}</h3>
              <p className="secondary-text">{intern.date}</p>
              <p>{intern.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="contact-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="input-field"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="input-field"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="input-field"
            />
            <button type="submit" className="btn send-btn">
              Send Message
            </button>
          </form>
          <div className="contact-info">
            <p> <FaMapPin size={28} />Location: Chennai, India</p>
          </div>
        </div>
      </Section>

      <footer className="footer">
        © 2025 Joel Jacob B. All rights reserved.
      </footer>
    </div>
  );
}
