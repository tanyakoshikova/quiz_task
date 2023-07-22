import React from "react";
import {Link} from "react-router-dom";
import "../../App.scss"

export function NoPage () {
    return (
        <div className="app">
            <h1 className="error">Error 404.</h1>
            <h5>The page you are requesting does not exist.</h5>
            <Link to="/">Go back to the main page</Link>
        </div>
    )
}