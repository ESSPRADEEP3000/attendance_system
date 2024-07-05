import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './about.css'; // Create a new CSS file for styling

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h3><center>Attendance Management System</center></h3>
              <h2>
                Attendance Management System is our application developed for
                tracking the attendance of students efficiently.
              </h2>
              <p>
                In our system, we have implemented different logins tailored
                for various users, each serving a specific purpose:
              </p>
              <ul className="animated-list">
                <li>
                  <strong>Student Login:</strong> Students can access their
                  attendance records, view class schedules, and receive
                  notifications about their attendance status. This login
                  provides students with a user-friendly interface for managing
                  their attendance.
                </li>
                <li>
                  <strong>Trainer Login:</strong> Trainers have access to
                  attendance data for the classes they are responsible for.
                  Features include the ability to mark attendance, generate
                  reports, and communicate with students regarding attendance
                  issues. This login streamlines the tracking process for
                  trainers and enhances overall class management.
                </li>
                <li>
                  <strong>Admin Login:</strong> The admin login provides
                  complete access to all the data in our attendance management
                  system. Admins can manage user accounts, customize system
                  settings, and generate comprehensive reports. This login is
                  designed for system administrators to ensure smooth
                  functionality and data integrity.
                </li>
              </ul>
              {/* <div className="text-center text-lg-start"> */}
                {/* <Link */}
                  {/* // to="#read-more" */}
                  {/* // className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center" *
                {/* // > */}
                  {/* <span>Read More</span> */}
                  {/* <i className="bi bi-arrow-right"></i> */}
                {/* </Link> */}
              {/* </div> */}
            </div>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img src="assets/img/features.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
