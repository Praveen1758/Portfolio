import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white scroll-smooth">
      {/* Navbar */}
      <header className="flex items-center justify-between p-4 shadow-md dark:shadow-gray-700 sticky top-0 z-50 bg-white dark:bg-gray-900">
        <h1 className="text-xl font-bold">Praveen Kandakoor</h1>
        <nav className="space-x-4 hidden sm:block">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded bg-gray-800 text-white dark:bg-yellow-400 dark:text-black"
        >
          {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 gap-12 bg-white dark:bg-gray-900"
        data-aos="fade-up"
      >
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-blue-600 dark:text-yellow-400">Praveen Kandakoor</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            A passionate Full Stack Developer skilled in MERN stack, building responsive web apps, and always eager to learn & grow in tech.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
            >
              View My Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded bg-gray-800 text-white hover:bg-gray-700 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300 transition font-medium"
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div data-aos="fade-left" className="max-w-sm">
          <img
            src="/me.jpg"
            alt="Praveen Kandakoor"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-8 bg-gray-100 dark:bg-gray-800" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Final year B.Tech student at Srinivas University, Mangalore, with hands-on experience in full stack development. Recently completed a MERN stack internship at CodLabs, and built several projects including a shopping website, a real-time weather dashboard, and a product listing page. Eager to contribute to real-world software development projects and continuously upskill in data engineering and backend technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-8 bg-white dark:bg-gray-900" data-aos="zoom-in-up">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Project Cards */}
          {[
            {
              title: "Online Shopping Website",
              desc: "Full-stack MERN shopping website with product listing, cart, search, and sorting features.",
              link: "https://github.com/Praveen1758"
            },
            {
              title: "Real-Time Weather Dashboard",
              desc: "Real-time weather data visualization using Kafka, MongoDB, and Flask.",
              link: "https://github.com/Praveen1758"
            },
            {
              title: "Product Listing Page",
              desc: "Product grid with search, ratings, offline detection, and more using React and MUI.",
              link: "https://github.com/Praveen1758"
            }
          ].map((project, i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                GitHub Repo
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 bg-gray-100 dark:bg-gray-800 text-center" data-aos="fade-right">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Feel free to reach out for collaborations or just a friendly hello! 👋
        </p>
        <form
          action="https://formspree.io/f/xpwloeej"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} Praveen Kandakoor | Email:{' '}
          <a href="mailto:praveenkandakoor@gmail.com" className="underline">
            praveenkandakoor@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
