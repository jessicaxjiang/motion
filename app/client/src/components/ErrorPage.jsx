import React from "react";
import './components.css';
import SmallHeader from './SmallHeader';
import Button from '@material-ui/core/Button';
import error from './404-error.png';

function ErrorPage() {
    return (
        <div className="error-page">
            <SmallHeader />
            <div className="error-content">
                <div className="error-img">
                    <img src={error} className="Error-logo" alt="error" />
                </div>
                <div className="error-message">
                    <h3>Whoops!</h3>
                    <h3>Page not found</h3>
                    <div className="home-button"><Button href="/">Return Home</Button></div>
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default ErrorPage;