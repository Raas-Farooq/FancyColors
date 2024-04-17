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
const reviewItem = Array.isArray(review) ? review[0] : review;

  // Access id based on the type of reviewItem
  const id = reviewItem ? reviewItem.id : null;

  console.log("reviewItem in DisplayReview", reviewItem);
  console.log("review.id", id);

    return (
        <div className="review" id={reviewItem.id} key={reviewItem.id}>
            <img className="my-img" src={reviewItem.image} height="150px" />
            <div class="priceName">
                <h3 className="name"> {reviewItem.name}</h3> 
                <h6 className="name"> {reviewItem.job}</h6> 

            </div>
            <p className="info">
                {reviewItem.text}
            </p>  
            <button className="btn btn-primary" onClick={() => handlePrev()}><ArrowLeft /></button>
            <button className="btn btn-primary" onClick={handleNext}><ArrowRight /></button>
            <div>
            <button className="btn btn-primary random" onClick={handleRandom}> Random </button>
            </div>  
        </div>
        // { <div> Be Aware Of Your Thoughts and New Desires/Expectations</div> 
    )
    
}

export default DisplayReviews


  