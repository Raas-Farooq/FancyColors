import React from 'react';
import './index.css'

function displayTours({tour,remove})
{


    return (
        <div className="tour" id={tour.id} key={tour.id}>
            <img src={tour.image} height="300px" />
            <div class="priceName">
                <h5 className="name"> ${tour.name}</h5>
                <h5 className="price"> ${tour.price}</h5>  
            </div>
            <p className="info">
                ${tour.info}
            </p>
            <button className="remove" onClick={(e) => remove(e.target.parentElement)}> ForgetMe</button>
        </div>
    )
    
}

export default displayTours