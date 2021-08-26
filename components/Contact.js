import React, {useState} from "react";
import axios from "axios"

const Contact = () => {

    const [userInput, setUserInput] = useState({"name":"", "email":"", "message":""})
    const [statusMsg, setStatusMsg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [isError, setIsError] = useState(false)

    const inputHandler = (e) => {
        const key = e.target.name;
        setUserInput({...userInput, [key]:e.target.value});
    }

    const submitHandler = async (e) =>{
        e.preventDefault();
        setErrorMsg("")
        const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
        if(regex.test(userInput.email)){
            const response = await axios.post('https://mail-flask.herokuapp.com/api/contact', userInput);
            const data  = await response.data;
            if(data.status == "success"){
                setStatusMsg("Sent Successfully")
            }else{
                setStatusMsg("Failed")
            }
        }else{
            setIsError(false)
            setErrorMsg("Please enter a valid email address.")
            setTimeout(()=>{
                setIsError(true)
            }, 3000)
        }
    }

    
    return(<div className="contact-container" id="contact">
            <div className="contact">
                <div className="contact-left">
                    <h1>Contact</h1>
                </div>
                <div className="contact-right">
                <form>
                    <input onChange={inputHandler} 
                           className="form-input" 
                           placeholder="Name" 
                           name="name" 
                           required>
                    </input>
                    <br></br>
                    <input  onChange={inputHandler} 
                            className="form-input" 
                            placeholder="Email" 
                            name="email" 
                            type="email"
                            required>
                    </input>
                    <br></br>
                    <textarea  onChange={inputHandler} 
                               className="form-textarea" 
                               placeholder="Message" 
                               name="message" 
                               required>
                    </textarea>
                    <br></br>
                    {isError ? null : <p style={{color:"#F32013", fontSize:"1rem"}}>{errorMsg}</p>}
                    <button onClick={submitHandler} 
                            className="form-btn"
                            type="submit">
                        Send
                    </button>
                </form>
                    
                </div>
            </div>
        
    </div>)
}

export default Contact;