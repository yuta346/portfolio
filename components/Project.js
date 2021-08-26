import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import FlashCardImg1 from "../images/flashcard1.png"
import FlashCardImg2 from "../images/flashcard2.png"
import InputTool from "../images/input-tool.png"
import Todo from "../images/todo.png"
import Pokemon1 from "../images/pokemon1.png"
import Pokemon2 from "../images/pokemon2.png"


const Project = () => {
    
    return (<div className="project-container" id="projects">
                <div className="project">
                            <div className="project-left">
                                <h1>Projects</h1>
                            </div>
                            <div className="project-right">
                                <div className="project-card">
                                    <h3 className="project-title">Flashcard App</h3>
                                    <div className="project-img-container">
                                        <img className="project-img" src={FlashCardImg1} alt=""/>
                                        <img className="project-img" src={FlashCardImg2} alt=""/>
                                    </div>
                                    
                                    <p>Developed a flashcard web application using Flask and React that allows logged-in users to easily create flashcards with definitions and examples from the Oxford Dictionaries API, create a custom flashcard manually, study saved flashcards, take a quiz, and check user's progress and performance analytics.</p>
                                    <h3>Utilized:</h3>
                                    <p>Python, JavaScript, Flask, React.js, SQLite, SQLAlchemy, HTML/CSS, Material-UI, Recharts, The Oxford Dictionaries API</p>
                                    <div className="button-container">
                                        <button className="code-btn-long"><a href="https://github.com/yuta346/flashcard-frontend-react"><GitHubIcon className="git-icon"/>Front-End Code</a></button>
                                        <button className="code-btn-long"><a href="https://github.com/yuta346/flashcard-backend-flask"><GitHubIcon className="git-icon"/>Back-End Code</a></button>
                                    </div>
                                    
                                </div>
                                <div className="project-card">
                                    <h3 className="project-title">Chrome Extension Input Tool</h3>
                                    <div className="project-img-container">
                                    <img className="project-img" src={InputTool} alt=""/>
                                    </div>
                                    <p>Designed and built a chrome extension input tool that allows users to save a word to their accounts without opening the flashcard web application. A word saved via the input tool will show up on the pending words page to choose the closest definition users would like to keep to their account.</p>
                                    <h3>Utilized:</h3>
                                    <p>JavaScript, HTML/CSS</p>
                                    <div className="button-container">
                                        <button className="code-btn"><a href="https://github.com/yuta346/Chrome-Extension-Input-Tool"><GitHubIcon className="git-icon"/>Code</a></button>
                                    </div>
                                    
                                </div>
                                <div className="project-card">
                                    <h3 className="project-title">Pokemon Lookup</h3>
                                    <div className="project-img-container">
                                        <img className="project-img" src={Pokemon1} alt=""/>
                                        <img className="project-img" src={Pokemon2} alt=""/>
                                    </div>
                                    <p>Developed a web application that allows user to display the data of all pokemons with pagination, and search pokemon with a Pokédex number using JavaScript and React.js.</p>
                                    <h3>Utilized:</h3>
                                    <p>JavaScript, React.js, HTML/CSS</p>
                                    <div className="button-container">
                                        <button className="code-btn"><a href="https://github.com/yuta346/Pokemon-Lookup-react"><GitHubIcon className="git-icon"/>Code</a></button>
                                    </div>
                                    
                                </div>
                                <div className="project-card">
                                    <h3 className="project-title">Todo List</h3>
                                    <div className="project-img-container">
                                    <img className="project-img" src={Todo} alt=""/>
                                    </div>
                                    <p>Developed a Todo List web application using JavaScript and Vue.js. This application allows users to add a task to complete with a category, filter tasks by a category, and delete them from Todo List.</p>
                                    <h3>Utilized:</h3>
                                    <p>JavaScript, Vue.js, HTML/CSS, Font Awesome</p>
                                    <div className="button-container">
                                        <button className="code-btn"><a href="https://github.com/yuta346/todo-list-Vue"><GitHubIcon className="git-icon"/>Code</a></button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>)
}

export default Project;