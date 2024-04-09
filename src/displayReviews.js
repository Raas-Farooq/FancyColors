import React,{useState} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import './index.css'
// review,
function DisplayReviews({review, handleNext,handlePrev,handleRandom})

{
const [expand, setExpand] = useState(false)
// console.log("DisplayReview review[0].id", review[0].id);
console.log("review in DisplayReview", review);
    console.log("review.id", review.id);
    return (
        // <div>
        //     <h3> LOvE ALLah(SWT)</h3>
        // </div>

        <div className="review" id={review.id} key={review.id}>
            <img className="my-img" src={review.image} height="150px" />
            <div class="priceName">
                <h5 className="name"> {review.name}</h5> 
            </div>
            <p className="info">
                ${review.text}
            </p>  
            <button className="btn btn-primary" onClick={() => handlePrev()}><ArrowLeft /></button>
            <button className="btn btn-primary" onClick={handleNext}><ArrowRight /></button>
            <div>
            <button className="btn btn-primary random" onClick={handleRandom}> Random </button>
            </div>  
        </div>
    )
    
}

export default DisplayReviews