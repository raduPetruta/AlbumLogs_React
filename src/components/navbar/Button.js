import { render } from "@testing-library/react";
import React, { Children } from "react";
import './Button.css'

export const Button = () => { 
    return(
        <button className="signUpButton">Sign Up!</button>
    )
}
