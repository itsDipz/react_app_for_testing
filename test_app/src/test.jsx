import React from "react";
import ReactDOM from "react-dom";
import "./App.css"

function A_Div() {
    return (

        <div className="flex_div_test">
            <A_Button />
        </div>
    )
}

let user_name = "Elliot";

function A_Button() {

    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button className="a_button" onClick={handleClick}>
            Click me
        </button>
    );
}


export {
    A_Button,
    A_Div
}