import React from "react";
import Pdf from '../resources/YutaHagiwara_Resume_Portfolio.pdf';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = () => {

    const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
    const navbarLinks = document.getElementsByClassName('nav-items')[0]

    const toggleActive = () => {
        navbarLinks.classList.toggle('active');
        console.log(navbarLinks)
    }

    return (<div className="nav-container">
                <div className="nav-title">Yuta Hagiwara</div>
                <a href="#" className="toggle-btn">
                    <MenuIcon className="bar" 
                              style={{fontSize:"40px"}}
                              onClick={toggleActive}
                              />
                </a>
                <div className="nav-items">
                    <ul id="nav">
                        <li><a href="#about"><b>Home</b></a></li>
                        <li><a href="#experiences">Experience</a></li>
                        <li><a href="#projects">Project</a></li>
                        <li><a href = {Pdf} target = "_blank">Resume</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>)      
}

export default Navbar;