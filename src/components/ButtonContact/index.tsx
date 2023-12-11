import React from "react";

interface ButtonContactProps {
    img: string
    link : any
}

const ButtonContact: React.FC<ButtonContactProps> = ({ img , link}) => {

    return (

        <a href={link} target="_blank">

            <div className="button-contact">
                <img src={img} alt="" />
            </div>

        </a>

    )


}

export default ButtonContact