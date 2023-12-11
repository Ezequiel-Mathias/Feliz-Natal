import React from "react";


interface CardAccessoriesProps{
    img : string
    title : string
    description : string
}

const CardAccessories: React.FC<CardAccessoriesProps> = ({img , title , description}) => {

    return (
        <div className="cards-accessories">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )

}

export default CardAccessories