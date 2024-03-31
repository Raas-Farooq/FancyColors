import React,{useState} from 'react';
import './index.css'

function DisplayTours({tour,remove})
{
const [expand, setExpand] = useState(false)
    console.log("TOUR: ", tour);
    return (
        <div className="tour" id={tour.id} key={tour.id}>
            <img className="my-img" src={tour.image} height="300px" />
            <div class="priceName">
                <h5 className="name"> ${tour.name}</h5>
                <h5 className="price"> ${tour.price}</h5>  
            </div>
            <p className="info">
                ${expand?tour.info:tour.info.substring(0, 200)}
                <button onClick={() => setExpand(!expand)}>{expand?'ShowLess':'ReadMore'}</button>
            </p>  
            <button className="btn btn-primary" onClick={(e) => remove(e.target.parentElement)}>Remove</button>
        </div>
    )
    
}

export default DisplayTours