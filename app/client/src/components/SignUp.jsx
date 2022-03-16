import React, { useState } from "react";
import './components.css';
import LoginHeader from './LoginHeader';
import Button from '@material-ui/core/Button';

const SignUp = props => {
    const [signup, setSignup] = useState(props.task);
    const submit = e => {
        e.preventDefault();
        let userinvalid = document.getElementById("username-invalid");
        let passwordinvalid = document.getElementById("password-invalid");
        let passwordmismatch = document.getElementById("password-mismatch");
        let flag = 0;
        userinvalid.style.display = "none";
        passwordinvalid.style.display = "none";
        passwordmismatch.style.display = "none";
        if(signup.username.length < 5){            
            userinvalid.style.display = "block";
            flag = 1;
        }
        if(signup.password.length < 8){
            passwordinvalid.style.display = "block";
            flag = 1;
        }
        if(signup.password !== signup.confirmpassword){
            passwordmismatch.style.display = "block";
            flag = 1;
        }
        if (flag===0){
            fetch('/addaccount', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ signup }),
            }).then(function (response) {
                console.log(response.status);
                console.log(response);
                window.location.href = "/todo";
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    return (
        <div>
            <div>
            <LoginHeader />
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="username-login">Username</label><br></br>
                    <input id="username-login"
                        className="subject-input"
                        type="text"
                        name="username-login"
                        placeholder="Username"
                        onChange={e => setSignup({ ...signup, username: e.target.value })} />
                </div>
                <br></br>
                <div>
                    <label htmlFor="password-login">Password</label><br></br>
                    <input id="password-login"
                        className="subject-input-pw"
                        type="text"
                        name="password-login"
                        placeholder="Password"
                        onChange={e => setSignup({ ...signup, password: e.target.value })} />
                </div>
                <br></br>
                <div>
                    <label htmlFor="password-login">Confirm Password</label><br></br>
                    <input id="password-login"
                        className="subject-input-pw"
                        type="text"
                        name="password-login"
                        placeholder="Password"
                        onChange={e => setSignup({ ...signup, confirmpassword: e.target.value })} />
                </div>
                <div id="username-taken" className="loginerror">Username taken</div>
                <div id="username-invalid"className="loginerror">Username must be at least 5 characters</div>
                <div id="password-invalid"className="loginerror">Password must be at least 8 characters</div>
                <div id="password-mismatch"className="loginerror">Passwords do not match</div>
                <div className="small-label" >Username must be at least 5 characters</div>
                <div className="small-label" >Password must be at least 8 characters</div>
                <div className="button-div">
                    <Button type="submit">Log in</Button>
                </div>
            </form>
        </div>
        <hr className="rounded"></hr>
        <a className="redirect" href="/login">Already have an account?</a>
        </div>
    )
}


export default SignUp;