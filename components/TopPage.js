import React from "react";
import Jpg from "../images/YutaHagiwara-img.JPG"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import SchoolIcon from '@material-ui/icons/School';

const TopPage = () => {

      
    return (
    <div className="about-container"　id="about">
        <div class="about">
                    <div class="about-left">
                        <img className="photo" src={Jpg} alt=""/>
                        <h1>Yuta Hagiwara</h1>
                        <p>CS Graduate Student</p>
                        <p>Fordham University GSAS</p>
                        <p>Incoming Software Engineer Intern at AILaw</p>
                        <div className="icons">
                            <GitHubIcon style={{fontSize: '40px', marginTop:"2px", color:"#0F5298"}} onClick={e =>  window.open('https://github.com/yuta346')}/>
                            <LinkedInIcon style={{fontSize: '50px', color:"#0F5298"}} onClick={e =>  window.open('https://www.linkedin.com/in/yuta-hagiwara/')}/>
                            <a href="mailto:hagiwara.y@outlook.com" target="_top"><EmailIcon style={{fontSize: '50px', color:"#0F5298"}}/></a>
                        </div>
                    </div>
                    <div class="about-right">
                        <img class="computer-img" src="images/computer.png" alt=""/>
                        <h1>Biography</h1>
                        <p class='bio-container-description'>I am a Master’s student in the Department of Information and Computer Science at Fordham University graduating in December 2021. I have a Bachelor's degree in Organizational Leadership from Northeastern University.</p>
                        <p>I am currently working as a Graduate Research Assistant at the Computational Neurobiology Laboratory at Fordham University.</p>
                        <p>I am conducting data analysis with a team of 6 to identify individual and institutional level risk factors for undiagnosed concussions and delayed care-seeking by utilizing Data Analysis and Machine Learning.</p>
                        <p>My interest lies in creating an interesting and useful Web Application.</p>
                        <div className="about-education-skills-container">
                            <div className="about-education-skills">
                                <h2>Skills</h2>
                                <h4> - Front End</h4>
                                <p>JavaScript, React.js, Vue.js, HTML5, CSS3, Recharts, Material-UI, Bootstrap</p>
                                <h4> - Back End</h4>
                                <p>Python, C++, Flask</p>
                                <h4> - Database</h4>
                                <p>SQLite, MongoDB, SQLAlchemy</p>
                                <h4> - Other</h4>
                                <p>Git, Tableau, MS Excel</p>
                            </div>
                            <div className="about-education-skills">
                                <h2>Education</h2>
                                <h4><SchoolIcon className="school-icon"/> Fordham University, New York, NY</h4>
                                <p>M.S in Computer Science, December 2021 </p>
                                <p>Concentration in Software Engineering</p>
                                <p>Lab: Computational Neurobiology</p>
                                <p>Cumulative GPA: 3.92/4.0</p>
                                <h4><SchoolIcon className="school-icon"/> Northeastern University, Boston, MA</h4>
                                <p>B.S in Organizational Leadership, May 2016</p>
                                <p>Honors/Awards: Summa Cum Laude</p>
                            </div>
                            
                        </div>
                    </div>
                   
            </div>
        </div>)
}

export default TopPage;