import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import './app.css';

const Home = () => {
  return (
    <div className="bg-black text-white section-home" id="home">
      <div className="bg-img">
        <div className="absolute inset-0 flex justify-center">
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <img className="imgre" src="https://vinayaksingh.com/static/media/illustration.cf4b7a67f23b684549c4f797c62b527a.svg" alt="Hand" />
          </div>
        </div>
      </div>

      <div className="text-center">
        <main className="flex flex-col lg:flex-row items-center justify-between lg:text-right px-6 py-12 w-full text-start">
          <div className="lg:w-1/2 flex flex-col justify-center  lg:text-right">
            <p className="hand text-xl text-start">Hello <span className="text-4xl animate-handMove text-yellow-500">👋,</span> I'm</p>
            <h2 className="text-5xl font-bold mt-2">Mohammed Hashim</h2>
            <h3 className="text-green-500 text-2xl mt-2">Front End Developer</h3>
            <button className="bg-green-500 text-black px-6 py-2 rounded-full p-5 ">Contact</button>

            <div className="flex space-x-8 mt-6 text-3xl">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-green-500" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-green-500" />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="hover:text-green-500" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="hover:text-green-500" />
              </a>
            </div>
          </div>

         
        </main>
      </div>
    </div>
  );
};

export default Home;
