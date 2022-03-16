import React, { useState } from "react";
import './components.css';
import LoginHeader from './LoginHeader';
import Button from '@material-ui/core/Button';

const Login = props => {
    const [login, setLogin] = useState(props.task);

    const submit = e => {
        e.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login }),
        }).then(function (response) {
            console.log(response.status);
            console.log(response);
            window.location.href = "/todo";
        }).catch(function (error) {
            console.log(error);
        });
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
                        onChange={e => setLogin({ ...login, username: e.target.value })} />
                </div>
                <div className="loginerror">Username or password incorrect</div>
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