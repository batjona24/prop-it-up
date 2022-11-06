import React from 'react';

const PersonCard = (props) =>{
    return(
        <div>
            <h1> { props.tittle }</h1>
            <p>{ props.age }</p>
            <p>{ props.desc }</p>
        </div>

    )
}
export default PersonCard;