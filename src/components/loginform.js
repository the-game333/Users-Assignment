import React, {useEffect, useState} from "react";
import "./loginform.css"
import CardData from "./cardData.js";

const LoginForm = () => {
    const [uname, setUname] = useState('');
    const [value, setValue] = useState('');
    const handleClick=()=>{
        setValue(uname);
    }


    return (
        <>
        {value? <CardData value={value}/>
            :
        <div className="cover">
            <h3>Enter Username</h3>
            <input type="text" placeholder="username" onChange={(e)=>{setUname(e.target.value)}}/>

            <div className="login-btn" onClick={handleClick}>Login</div>
            
        </div>
        }
        </>
    )
}

export default LoginForm