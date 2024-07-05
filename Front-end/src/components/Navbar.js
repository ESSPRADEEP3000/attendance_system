// import { Link,useNavigate } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useUser } from "../Auth/userProvider";
// const Menu=()=>{
//   useEffect(()=>{
//     AOS.init();
//   },[])
//   const {user,details,logoutUser,page,setdetails,setpage}=useUser();
//   const usenav=useNavigate();
//   // useEffect(()=>{
//   //   if(user)
//   //   {
//   //   axios.get('http://localhost:7000/dashboard',{
//   //     headers:{
//   //       'Authorization':`${user}`
//   //     }
//   //   }).then((res)=>{
//   //   console.log(res.data);
//   //   setdetails(res.data.info);
//   //   setpage(res.data.msg)
//   //   }).catch((err)=>{});
//   // }
//   // },[user])
//   const handleLogout = () => {
//     logoutUser()
//     usenav('/login',{replace:true});
//     // window.location.reload();
//   };
//     return(
//       <header id="header" className="header fixed-top" style={{marginTop:"-20px"}}>
//       <div className="container-fluid bg-light container-xl d-flex align-items-center justify-content-between">
  
//         <a href="index.html" className="logo d-flex align-items-center">
//           <img src='http://localhost:7000/images/logo.png' alt="" />
//           <span>Pulse Track</span>
//         </a>
  
//         <nav id="navbar" className="navbar">
//           <ul>
//             <li><Link to='/'><span className="nav-link scrollto active" href="#hero">Home</span></Link></li>
//             <li><Link to='about'><span className="nav-link scrollto" href="#about">About</span></Link></li>
//             <li><Link to='services'><span className="nav-link scrollto">Services</span></Link></li>
//             <li><a className="nav-link scrollto" onClick={()=>{if(user)usenav(`/${page}/${details._id}`);else usenav('/login')}}>Portfolio</a></li>
            
            
//             <li><Link to='contact'><span className="nav-link scrollto" href="#contact">Contact</span></Link></li>
//             { user && details?(
//               <li className="dropdown">
              
//                   <button className="ms-3 btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
//                    {details.name}
//                   </button>
//                   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                     <li><span className="dropdown-item" onClick={handleLogout}>Logout</span></li>
//                   </ul>
//                 </li>):(
//             <li><Link to='login'><span className="getstarted scrollto" href="#about">Login</span></Link></li>

//                 )
//             }
//           </ul>
//           <i className="bi bi-list mobile-nav-toggle"></i>
//         </nav>
  
//       </div>
//     </header>
//     )
// }
// export default Menu;

// import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button, Dropdown, Navbar, Nav } from "react-bootstrap";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useUser } from "../Auth/userProvider";
// 
// const Menu = () => {
  // useEffect(() => {
    // AOS.init();
  // }, []);
// 
  // const { user, details, logoutUser, page, setdetails, setpage } = useUser();
  // const usenav = useNavigate();
// 
  // const handleLogout = () => {
    // logoutUser();
    // usenav("/login", { replace: true });
  // };
// 
  // return (
    // <Navbar bg="light" expand="lg">
      // {/* <Navbar.Brand> */}
        // {/* <Link to="/" className="logo d-flex align-items-center"> */}
          // {/* <img src="http://localhost:7000/images/logo.png" alt="" /> */}
          // {/* <span>Pulse Track</span> */}
        // {/* </Link> */}
      // {/* </Navbar.Brand> */}
      // {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      // {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        // {/* <Nav className="mr-auto"> */}
          // {/* <Nav.Link> */}
            // {/* <Link to="/" className="nav-link scrollto active"> */}
              // {/* Home */}
            // {/* </Link> */}
          // {/* </Nav.Link> */}
          // {/* <Nav.Link> */}
            // {/* <Link to="/about" className="nav-link scrollto"> */}
              // {/* About */}
            // {/* </Link> */}
          // {/* </Nav.Link> */}
          // {/* <Nav.Link> */}
            // {/* <Link to="/services" className="nav-link scrollto"> */}
              // {/* Services */}
            // {/* </Link> */}
          // {/* </Nav.Link> */}
          // {/* <Nav.Link> */}
            // {/* <Link  className="nav-link scrollto" onClick={() => (user ? usenav(`/${page}/${details._id}`) : usenav("/login"))}> */}
              // {/* Portfolio */}
            // {/* </Link> */}
          // {/* </Nav.Link> */}
          // {/* <Nav.Link> */}
            // {/* <Link to="/contact" className="nav-link scrollto"> */}
              // {/* Contact */}
            // {/* </Link> */}
          // {/* </Nav.Link> */}
        // {/* </Nav> */}
        // {/* <Nav className="ml-auto"> */}
          // {/* {details ? ( */}
            // <Dropdown>
              // {/* <Dropdown.Toggle variant="primary" id="dropdownMenuButton"> */}
                // {/* {details.name} */}
              // {/* </Dropdown.Toggle> */}
              // {/* <Dropdown.Menu> */}
// {/*                  */}
                // {/* <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item> */}
              // {/* </Dropdown.Menu> */}
            // {/* </Dropdown> */}
          // ) : (
            // <Link to="/login">
              // {/* <span className="getstarted scrollto">Login</span> */}
            // {/* </Link> */}
          // )}
        // {/* </Nav> */}
      // {/* </Navbar.Collapse> */}
    // {/* </Navbar> */}
  // );
// };
// 
// export default Menu;
// 
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Dropdown, Navbar, Nav } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useUser } from "../Auth/userProvider";

const Menu = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { user, details, logoutUser, page, setdetails, setpage } = useUser();
  const usenav = useNavigate();

  const handleLogout = () => {
    logoutUser();
    usenav("/login", { replace: true });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="container-fluid bg-light container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src="http://localhost:7000/images/logo.png" alt="" />
          <span>Pulse Track</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/" className="nav-link scrollto active">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about" className="nav-link scrollto">
              About
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/services" className="nav-link scrollto">
              Services
            </Link>
          </Nav.Link>
          <Nav.Link>
            <a  onClick={()=>{if(user)usenav(`/${page}/${details._id}`);else usenav('/login')}} className="nav-link scrollto">
              Portfolio
            </a>
            {/* <Nav.Link className="nav-link scrollto" onClick={()=>{if(user)usenav(`/${page}/${details._id}`});else usenav('/login')}}>Portfolio</Link> */}
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact" className="nav-link scrollto">
              Contact
            </Link>
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {details ? (
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdownMenuButton">
                {details.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link to="/login">
              <span className="getstarted scrollto">Login</span>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
