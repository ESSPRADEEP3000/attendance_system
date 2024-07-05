// // import { useState,useEffect } from "react";
// // import {  useParams } from "react-router-dom";
// // import './studentcard.css';
// // import {Chart} from 'react-google-charts';
// // import axios from "axios";
// // import { useUser } from "../Auth/userProvider";
// // const Stuportfolio=()=>{
// //     const {id}=useParams();
// //     const {details}=useUser();

// //          const data = [
// //             ["Attendance", "Till Now"],
// //             ["present", details.percentage],
// //             ["Absent",100-details.percentage]
// //           ];

// //          const options = {
// //             title: "Attendance percentage",
// //           };
// //         return (
// //             <>
// //             <div className="container mt-5">
// //     <div className="row">
// //         <div className="student-card col-md-4 p-5">
// //             <div className="img">
// //                 <img src="http://localhost:7000/images/studprofile.png" alt="Student Avatar" />
// //                 <h2>{details.name + " " + details.lname}</h2>
// //             </div>
// //             <div className="student-details">
// //                 <p><strong>Roll Number:</strong> {details.rollno}</p>
// //                 <p><strong>Phone Number:</strong> {details.phno}</p>
// //                 <p><strong>Email:</strong> {details.email}</p>
// //                 <p><strong>Course:</strong> {details.course}</p>
// //             </div>
// //         </div>

// //         <div className="student-card col-md-8 w-50">
// //             <center><h1 className="col-md-12">Attendance report</h1></center>
// //             <div className="row">
// //             <div className="student-avatar2 col-md-6">
// //                 <Chart className="img"
// //                     chartType="PieChart"
// //                     data={data}
// //                     options={options}
// //                     width={"100%"}
// //                     height={"100%"}
// //                 />
// //             </div>
// //             <div className="student-details col-md-6">
// //                 <h2 className="mb-5">Student Data</h2>
// //                 <p><strong>No of Days Present:</strong> {details.presentDays}</p>
// //                 <p><strong>Total Working Days:</strong> {details.TotalDays}</p>
// //                 <p><strong>status:</strong> {details.attendence ? <>Present</> : <>Absent</>}</p>
// //                 <p><strong>percentage:</strong> {details.percentage}</p>
// //             </div>
// //             </div>
// //         </div>
// //     </div>
// // </div>

// //         </>
// //         )
// // }
// // export default Stuportfolio;

// // import React, { useState } from "react";
// // import {Button} from 'react-bootstrap';
// // import { useParams } from "react-router-dom";
// // import './studentcard.css';
// // import { Chart } from 'react-google-charts';
// // import Calendar from 'react-calendar';
// // import { useUser } from "../Auth/userProvider";
// // import axios from "axios";

// // const Stuportfolio = () => {
// //   const { id } = useParams();
// //   const { details, fetchUserDetails } = useUser();
// //   const [markedAttendance, setMarkedAttendance] = useState(false);

// //   const markAttendance = async () => {
// //     try {
// //       await axios.post(`http://your-api-url/markAttendance/${id}`);
// //       setMarkedAttendance(true);
// //       fetchUserDetails();
// //     } catch (error) {
// //       console.error("Error marking attendance:", error);
// //     }
// //   };

// //   const data = [
// //     ["Attendance", "Till Now"],
// //     ["present", details.percentage],
// //     ["Absent", 100 - details.percentage]

// //   ];

// //   const options = {
// //     title: "Attendance percentage",
// //     width: "100%",  // Set the desired width
// //     height: "500px", // Set the desired height
// //   };

// //   return (
// //     <>

// //     {details.percentage < 70 ? (
// //         <div className="alert alert-info mt-5" role="alert">
// //       <p>Your attendance is below 70%. Please make sure to attend classes regularly.</p>
// //     </div>

// //     ):(<></>)}
// //     {/* Add more notifications based on your criteria */}
// //     <div className="container mt-5">
// //       <div className="row">
// //         <div className="col-md-4">
// //           <div className="card student-card">
// //             <img src="http://localhost:7000/images/studprofile.png" alt="Student Avatar" className="student-avatar " />
// //             <div className="card-body">
// //               <h2 className="card-title">{details.name + " " + details.lname}</h2>
// //               <div className="student-details">
// //                 <p><strong>Roll Number:</strong> {details.rollno}</p>
// //                 <p><strong>Phone Number:</strong> {details.phno}</p>
// //                 <p><strong>Email:</strong> {details.email}</p>
// //                 <p><strong>Course:</strong> {details.course}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="col-md-8">
// //           <div className="card student-card">
// //             <h1 className="card-title text-center mt-3">Attendance Report</h1>
// //             <div className="row">
// //               <div className="col-md-6">
// //                 {/* <div className="card-body text-center"> */}
// //                 <div className="card-chart text-center">
// //                   <Chart
// //                     chartType="PieChart"
// //                     data={data}
// //                     options={options}
// //                     width={"100%"}
// //                     height={"100%"}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="card student-card">
// //           <div className="col-md-6">
// //  <div className="card-body">
// //  <h2 className="mb-5">Student Data</h2>
// //  <p><strong>No of Days Present:</strong> {details.presentDays}</p>
// //  <p><strong>Total Working Days:</strong> {details.TotalDays}</p>
// //  <p><strong>Status:</strong><Button variant={details.attendence ? "success" : "danger"}>
// //         {details.attendence ? "Present" : "Absent"}</Button></p>
// //  <p><strong>Percentage:</strong> {details.percentage}</p>
// //     </div>
// // </div>
// // </div>

// //           {/* Date-wise Attendance History */}
// //           {/* <div className="card student-card mt-4"> */}
// //             {/* <h2 className="card-title text-center mt-3">Attendance History</h2> */}
// //             {/* <table className="table table-striped"> */}
// //               {/* <thead> */}
// //                 {/* <tr> */}
// //                   {/* <th>Date</th> */}
// //                   {/* <th>Status</th> */}
// //                 {/* </tr> */}
// //               {/* </thead> */}
// //               {/* <tbody> */}
// //                 {/* {details.attendanceHistory?.map((entry, index) => ( */}
// //                 {/* //   <tr key={index}> */}
// //                     {/* <td>{entry.date}</td> */}
// //                     {/* <td>{entry.status}</td> */}
// //                   {/* </tr> */}
// //                 {/* // ))} */}
// //               {/* </tbody> */}
// //             {/* </table> */}
// //           {/* </div> */}

// //           {/* Attendance Notifications */}
// //         </div>
// //       </div>
// // {/*  */}
// //       {/* Calendar View */}
// //       {/* <div className="card student-card mt-4"> */}
// //         {/* <h2 className="card-title text-center mt-3">Attendance Calendar</h2> */}
// //         {/* <div className="card-body"> */}
// //           {/* <Calendar */}
// //             {/* Add properties and styling as needed */}
// //         {/* //   /> */}
// //         {/* </div> */}
// //       {/* </div> */}

// //       {/* Overall Attendance Trend */}
// //       {/* <div className="card student-card mt-4"> */}
// //         {/* <h2 className="card-title text-center mt-3">Overall Attendance Trend</h2> */}
// //         {/* Add a chart or graph component for the trend */}
// //       {/* </div> */}
// //     </div>
// //     </>
// //   );
// // }

// // export default Stuportfolio;
// import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import "./studentcard.css";
// import { Chart } from "react-google-charts";
// import Calendar from "react-calendar";
// import { useUser } from "../Auth/userProvider";
// import axios from "axios";

// const Stuportfolio = () => {
//   const { id } = useParams();
//   const { details, fetchUserDetails } = useUser();
//   const [markedAttendance, setMarkedAttendance] = useState(false);
//   const [attendanceHistory, setAttendanceHistory] = useState([]);

//   useEffect(() => {
//     // Fetch attendance history for the student
//     const fetchAttendanceHistory = async () => {
//       try {
//         const response = await axios.get(`http://your-api-url/attendanceHistory/${id}`);
//         setAttendanceHistory(response.data.history);
//       } catch (error) {
//         console.error("Error fetching attendance history:", error);
//       }
//     };

//     fetchAttendanceHistory();
//   }, [id]);

//   const markAttendance = async () => {
//     try {
//       await axios.post(`http://your-api-url/markAttendance/${id}`);
//       setMarkedAttendance(true);
//       fetchUserDetails();
//     } catch (error) {
//       console.error("Error marking attendance:", error);
//     }
//   };

//   const data = [
//     ["Attendance", "Till Now"],
//     ["Present", details.percentage],
//     ["Absent", 100 - details.percentage],
//   ];

//   const options = {
//     title: "Attendance percentage",
//     width: "100%",
//     height: "500px",
//   };

//   return (
//     <>
//       {details.percentage < 70 && (
//         <div className="alert alert-info mt-5" role="alert">
//           <p>Your attendance is below 70%. Please make sure to attend classes regularly.</p>
//         </div>
//       )}

//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-md-4">
//             <div className="card student-card">
//               <img
//                 src="http://localhost:7000/images/studprofile.png"
//                 alt="Student Avatar"
//                 className="student-avatar "
//               />
//               <div className="card-body">
//                 <h2 className="card-title">
//                   {details.name} {details.lname}
//                 </h2>
//                 <div className="student-details">
//                   <p>
//                     <strong>Roll Number:</strong> {details.rollno}
//                   </p>
//                   <p>
//                     <strong>Phone Number:</strong> {details.phno}
//                   </p>
//                   <p>
//                     <strong>Email:</strong> {details.email}
//                   </p>
//                   <p>
//                     <strong>Course:</strong> {details.course}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-8">
//             <div className="card student-card">
//               <h1 className="card-title text-center mt-3">Attendance Report</h1>
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="card-chart text-center">
//                     <Chart
//                       chartType="PieChart"
//                       data={data}
//                       options={options}
//                       width={"100%"}
//                       height={"100%"}
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="card-body">
//                     <h2 className="mb-5">Student Data</h2>
//                     <p>
//                       <strong>No of Days Present:</strong> {details.presentDays}
//                     </p>
//                     <p>
//                       <strong>Total Working Days:</strong> {details.TotalDays}
//                     </p>
//                     <p>
//                       <strong>Status:</strong>{" "}
//                       <Button variant={details.attendence ? "success" : "danger"}>
//                         {details.attendence ? "Present" : "Absent"}
//                       </Button>
//                     </p>
//                     <p>
//                       <strong>Percentage:</strong> {details.percentage}
//                     </p>
//                     {!details.attendence && (
//                       <Button variant="primary" onClick={markAttendance}>
//                         Mark Attendance
//                       </Button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Attendance History */}
//             <div className="card student-card mt-4">
//               <h2 className="card-title text-center mt-3">Attendance History</h2>
//               <table className="table table-striped">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {attendanceHistory.map((entry, index) => (
//                     <tr key={index}>
//                       <td>{entry.date}</td>
//                       <td>{entry.status}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Calendar View */}
//             <div className="card student-card mt-4">
//               <h2 className="card-title text-center mt-3">Attendance Calendar</h2>
//               <div className="card-body">
//                 <Calendar
//                   // Add properties and styling as needed
//                 />
//               </div>
//             </div>

//             {/* Overall Attendance Trend */}
//             <div className="card student-card mt-4">
//               <h2 className="card-title text-center mt-3">Overall Attendance Trend</h2>
//               {/* Add a chart or graph component for the trend */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Stuportfolio;

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./studentcard.css";
import { Chart } from "react-google-charts";
import Calendar from "react-calendar";
import { useUser } from "../Auth/userProvider";
import axios from "axios";

const generateRandomData = () => {
  const randomPercentage = Math.floor(Math.random() * (100 - 60 + 1)) + 60; // Random percentage between 60 to 100
  const presentDays = Math.floor(Math.random() * 30); // Random number of present days (0-30)
  const totalDays = 30; // Assuming total working days in a month
  const attendanceHistory = [];

  // Generate random attendance history for the last 30 days
  for (let i = 0; i < 30; i++) {
    const date = new Date(
      new Date().setDate(new Date().getDate() - i)
    ).toLocaleDateString();
    const status = Math.random() < 0.8 ? "Present" : "Absent"; // 80% chance of being present
    attendanceHistory.push({ date, status });
  }

  return {
    name: "John", // Replace with random name generation logic
    lname: "Doe", // Replace with random last name generation logic
    rollno: Math.floor(Math.random() * 1000) + 1, // Random roll number
    phno: "+1234567890", // Replace with random phone number generation logic
    email: "john.doe@example.com", // Replace with random email generation logic
    course: "Computer Science", // Replace with random course name generation logic
    percentage: randomPercentage,
    presentDays,
    TotalDays: totalDays,
    attendence: randomPercentage >= 70, // Simulate attendance status based on percentage
    attendanceHistory,
  };
};

const Stuportfolio = () => {
  const { id } = useParams();
  const { fetchUserDetails } = useUser();
  const [details, setDetails] = useState(generateRandomData());
  const [markedAttendance, setMarkedAttendance] = useState(false);

  useEffect(() => {
    // Fetch user details from API based on ID
    const fetchUser = async () => {
      try {
        // Simulate API call to fetch user details
        // const response = await axios.get(`http://your-api-url/user/${id}`);
        // setDetails(response.data);
        const newDetails = generateRandomData(); // Generate random details for simulation
        setDetails(newDetails);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUser();
  }, [id]);

  const markAttendance = async () => {
    try {
      // Simulate API call to mark attendance
      await axios.post(`http://your-api-url/markAttendance/${id}`);
      setMarkedAttendance(true);
      fetchUserDetails();
    } catch (error) {
      console.error("Error marking attendance:", error);
    }
  };

  const data = [
    ["Attendance", "Till Now"],
    ["Present", details.percentage],
    ["Absent", 100 - details.percentage],
  ];

  const options = {
    title: "Attendance percentage",
    width: "100%",
    height: "500px",
  };

  return (
    <>
      {details.percentage < 70 && (
        <div className="alert alert-info mt-5" role="alert">
          <p>
            Your attendance is below 70%. Please make sure to attend classes
            regularly.
          </p>
        </div>
      )}

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card student-card">
              <img
                src="http://localhost:7000/images/studprofile.png"
                alt="Student Avatar"
                className="student-avatar "
              />
              <div className="card-body">
                <h2 className="card-title">
                  {details.name} {details.lname}
                </h2>
                <div className="student-details">
                  <p>
                    <strong>Roll Number:</strong> {details.rollno}
                  </p>
                  <p>
                    <strong>Phone Number:</strong> {details.phno}
                  </p>
                  <p>
                    <strong>Email:</strong> {details.email}
                  </p>
                  <p>
                    <strong>Course:</strong> {details.course}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card student-card">
              <h1 className="card-title text-center mt-3">Attendance Report</h1>
              <div className="row">
                <div className="col-md-6">
                  <div className="card-chart text-center">
                    <Chart
                      chartType="PieChart"
                      data={data}
                      options={options}
                      width={"50%"}
                      height={"50%"}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-body text-center">
                    {" "}
                    {/* Add text-center class here */}
                    <h2 className="mb-5">Student Data</h2>
                    <p>
                      <strong>No of Days Present:</strong> {details.presentDays}
                    </p>
                    <p>
                      <strong>Total Working Days:</strong> {details.TotalDays}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      <Button
                        variant={details.attendence ? "success" : "danger"}
                      >
                        {details.attendence ? "Present" : "Absent"}
                      </Button>
                    </p>
                    <p>
                      <strong>Percentage:</strong> {details.percentage}
                    </p>
                    {!details.attendence && (
                      <Button variant="primary" onClick={markAttendance}>
                        Mark Attendance
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance History */}
            <div className="card student-card mt-4">
              <h2 className="card-title text-center mt-3">
                Attendance History
              </h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {details.attendanceHistory.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.date}</td>
                      <td>{entry.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Calendar View */}
            <div className="card student-card mt-4">
              <h2 className="card-title text-center mt-3">
                Attendance Calendar
              </h2>
              <div className="card-body">
                <Calendar
                // Add properties and styling as needed
                />
              </div>
            </div>

            {/* Overall Attendance Trend */}
            <div className="card student-card mt-4">
              <h2 className="card-title text-center mt-3">
                Overall Attendance Trend
              </h2>
              {/* Add a chart or graph component for the trend */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stuportfolio;
