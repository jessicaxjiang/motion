import React, { useState } from "react";
import './components.css';
import LoginHeader from './LoginHeader';
import Button from '@material-ui/core/Button';

const Login = props => {
    const [login, setLogin] = useState(props.task);
    const submit = e => {
        e.preventDefault();
        let incorrect = document.getElementById("login-incorrect");
        let blank = document.getElementById("login-blank");
        let flag = 0;
        if (login.username.length === 0 || login.password.length === 0) {
            flag = 1;
            incorrect.style.display = "none";
            blank.style.display = "block";
        }
        if (flag === 0) {
            fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ login }),
            }).then(function (response) {
                if (response.status === 400 || response.status === 401) {
                    blank.style.display = "none";
                    incorrect.style.display = "block";
                    console.log("wrong password or blank");
                    console.log(response.status);
                    console.log(response);
                    flag = 1;
                }
                if (response.status === 200) {
                    incorrect.style.display = "none";
                    blank.style.display = "none";
                    console.log(response.status);
                    console.log(response);
                    window.location.href = "/todo";
                    flag = 0;
                }
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
                            onChange={e => setLogin({ ...login, username: e.target.value })} />
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="password-login">Password</label><br></br>
                        <input id="password-login"
                            className="subject-input-pw"
                            type="text"
                            name="password-login"
                            placeholder="Password"
                            onChange={e => setLogin({ ...login, password: e.target.value })} />
                    </div>
                    <div id="login-incorrect" className="loginerror">Username or password incorrect</div>
                    <div id="login-blank" className="loginerror">Username or password is blank</div>
                    <div className="button-div">
                        <Button type="submit">Log in</Button>
                    </div>
                </form>
            </div>
            <hr className="rounded"></hr>
            <a className="redirect" href="/signup">Sign up for an account</a>
        </div>
    )
}

export default Login;