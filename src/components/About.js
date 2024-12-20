import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";  // استيراد الأيقونات
import { SiCplusplus, SiWordpress } from "react-icons/si";  // استيراد C++ و WordPress
import { Fade, Zoom, Slide } from 'react-awesome-reveal';  // استيراد التأثيرات من المكتبة
import './app.css';

const About = () => {
  return (
    <div className="bg-dark text-white py-5" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <Fade direction="left" triggerOnce>
              <h2 className="display-4  mb-4">About Me</h2>
            </Fade>
            <Fade direction="left" delay={100} triggerOnce>
              <p className="lead mb-4">
                Hello! I'm Mohammed Hashim, a passionate Front End Developer with a strong focus on creating dynamic, user-friendly, and visually stunning websites. I specialize in HTML, CSS, JavaScript, and React, constantly exploring new technologies to improve my skills and build innovative solutions.
              </p>
            </Fade>
            <Slide direction="up" delay={200} triggerOnce>
              <p className="lead mb-4">
                I'm dedicated to making the web a better place through code and design, and I'm always open to new challenges and opportunities to grow.
              </p>
            </Slide>
          </div>
        </div>

        {/* قسم المهارات */}
        <div className="mt-5 skills">
          <Fade direction="up" triggerOnce>
            <h3 className="text-center text-3xl text-warning mb-4">Skills</h3>
          </Fade>
          <div className="row justify-content-start">
            {/* أيقونات المهارات */}
            <div className="col-4 col-sm-2 text-center">
              <Zoom delay={100} triggerOnce>
                <FaHtml5 className="text-danger" size={50} />
                <p>HTML</p>
              </Zoom>
            </div>
            <div className="col-4 col-sm-2 text-center">
              <Zoom delay={200} triggerOnce>
                <FaCss3Alt className="text-info" size={50} />
                <p>CSS</p>
              </Zoom>
            </div>
            <div className="col-4 col-sm-2 text-center">
              <Zoom delay={300} triggerOnce>
                <FaJsSquare className="text-warning" size={50} />
                <p>JavaScript</p>
              </Zoom>
            </div>
            <div className="col-4 col-sm-2 text-center">
              <Zoom delay={400} triggerOnce>
                <FaReact size={50} />
                <p>React</p>
              </Zoom>
            </div>
            <div className="col-4 col-sm-2 text-center">
              <Zoom delay={500} triggerOnce>
                <FaGitAlt size={50} />
                <p>Git</p>
              </Zoom>
            </div>

            {/* المهارات الجديدة */}
            <div className="col-4 col-sm-2 text-center">
              <Zoom delay={600} triggerOnce>
                <SiCplusplus className="text-blue-600" size={50} />
                <p>C++</p>
              </Zoom>
            </div>
            <div className="col-4 col-sm-2 text-center">
              <Zoom delay={700} triggerOnce>
                <FaNodeJs size={50} />
                <p>Node.js</p>
              </Zoom>
            </div>
            <div className="col-4 col-sm-2 text-center">
              <Zoom delay={800} triggerOnce>
                <SiWordpress size={50} />
                <p>WordPress</p>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
