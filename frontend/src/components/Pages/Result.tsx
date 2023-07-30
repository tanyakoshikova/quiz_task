import React from "react";
import {Link} from "react-router-dom";
import "App.scss"

export function Result () {
    return (
        <div className="app">
            <h2>Конец игры</h2>
            <Link to="/quiz">Играть еще раз</Link>
        </div>
    )
}