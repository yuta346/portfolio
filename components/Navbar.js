import React, {useState} from "react";
import Pdf from '../resources/YutaHagiwara_Resume_Portfolio.pdf';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleHandler = () => {
        setIsActive(!isActive)
        console.log(isActive)
    }


    return (<div className="nav-container">
                <div className="nav-title">Yuta Hagiwara</div>
                <a href="#" className="toggle-btn">
                    <MenuIcon 
                              style={{fontSize:"40px"}}
                              onClick={toggleHandler}
                              />
                </a>
                <div className={isActive ? "nav-items-toggle" : "nav-items"}>
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