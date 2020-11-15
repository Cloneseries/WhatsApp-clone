import React from 'react'
import { Button } from "@material-ui/core";
import "./Login.css"
import { auth, provider } from './firebase.js';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();


    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        });
    })
        .catch((error)=> alert(error.message));
    };
  
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png"
                alt=""/>
                <div className="login_text">
                    <h1> Login to whats App</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In With GOOGLE
                </Button>
            </div>
        </div>
    )
}

export default Login 
