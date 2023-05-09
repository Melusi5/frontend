import React from "react"
import './Card.css'
function CardBar(props) {
    return (
        <>
        <div class="card">
            <img src={props.image} class="card-img-top" alt="..." />
        </div>
        </>
    )
}

export default CardBar;
