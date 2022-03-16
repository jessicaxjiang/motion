import React from "react";
import './components.css';
import SmallHeader from './SmallHeader';
import Button from '@material-ui/core/Button';
import error from './404-error.png';

function ErrorPage(){
    return (
        <div className="error-page">
            <SmallHeader/>
            <img src={error} className="Error-logo" alt="error"/>
            <div className="error-message">
                <div>Whoops!</div>
                <div>Page not found</div>
            </div>
            <br></br>
            <div className="home-button"><Button href="/">Home</Button></div>
        </div>
    )
}

export default ErrorPage;