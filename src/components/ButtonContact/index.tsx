import React from "react";

interface ButtonContactProps{
    img : string
}

const ButtonContact : React.FC<ButtonContactProps> = ({img}) => {

    return(
        <div className="button-contact">
            <img src={img} alt="" />
        </div>
    )


}

export default ButtonContact