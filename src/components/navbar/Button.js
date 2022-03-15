import React, { Children } from "react";
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]
const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({ children, type, onClick, buttonStyle, buttonSize}) => {
    
    let checkButtonStyle;
    if(STYLES.includes(buttonStyle))
        checkButtonStyle = buttonStyle;
    else
        checkButtonStyle = STYLES[0];

    let checkButtonSize;
    if(SIZES.includes(buttonSize))
        checkButtonSize = buttonSize;
    else
        checkButtonSize = SIZES[0];

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type }>
            {children}
        </button>
    )
}