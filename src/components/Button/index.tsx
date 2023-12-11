import React from "react";
import Icon from "../Icon";

interface ButtonProps {
    text: string
    
}

const Button: React.FC<ButtonProps> = ({ text }) => {

    return (
        <div className="container-button">
             <img src="https://firebasestorage.googleapis.com/v0/b/feliz-natal-f7062.appspot.com/o/presente-Icon.svg?alt=media&token=a0621b0c-d439-4e8a-b2f5-ff5708cb1bd8" alt="" />
            {text}
           
        </div>
    )
}

export default Button