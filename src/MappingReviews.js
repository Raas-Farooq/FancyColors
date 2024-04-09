import React,{useState,useEffect} from 'react';

import ShowReviews from './displayReviews';
import './index.css';

function Mapping({reviews, currentReview}){

const [current, setCurrent] = useState([]);
const [initialReviewSet, setInitialReviewSet] = useState(false);
let [id, setId] = useState(1);

  
  useEffect(() => {
    console.log("UseEffect of MApping RREVIEWS: ", reviews[0]);
    if (reviews.length > 0 && !initialReviewSet) {
      const arrayReview = [reviews[0]];
      setCurrent(arrayReview); // Set the first review as current when reviews array changes

      setInitialReviewSet(true);
    }
  }, [reviews,initialReviewSet]);

  // useEffect(()=> {
  //   // const currentReview = reviews[0];
  //   // console.log("currentReview in USEFFECT: ", currentReview);
  //   // console.log("only Reviews in USEFFECT: ", reviews);
    
  //   setCurrent(currentReview);
  // }, []);

  
    
    function handleNext(){
      console.log("reviews.length: ", reviews.length)
      if(id === reviews.length){
        id =1;
        setId(id);
        
      }
      else{
        id++;
        setId(id);
      }
      console.log("handleNext Id: ", id);
      fetch(`http://localhost:5000/nextReview?id=${id}`).
      then(response => response.json().
      then(data => {
        console.log("Show me the Secret", data);
        setCurrent(data);
      })).
      catch(err => console.log("Errs are Always there: ", err))
    }


    function handlePrev(){
    
      if(id === 1){
        setId(reviews.length);
      }
      else{
        id = id - 1;
        setId(id);
      }
      
      fetch(`http://localhost:5000/prevReview?id=${id}`).
      then(response => response.json().
      then(data => {
        console.log("Show me the Secret", data);
        setCurrent(data);
      })).
      catch(err => console.log("Errs are Always there: ", err))
    }

    function handleRandom(){
      const num = Math.floor(Math.random() * reviews.length+1);
      fetch(`http://localhost:5000/random?id=${num}`).then
      (response => response.json()).
      then(data => {
        console.log("DATA IN RANDOM: ", data);
        setCurrent(data);
      }).catch(
        err => console.log("Alhamdulila What he has Decreed!: ", err)
      )   
    }
    // const [index, setIndex] = useState(1)
    // console.log("reviews in Mapping: ", reviews);
    // console.log("id in Mapping: ", typeof(id));
    // const first = 1;
    // const firstReview = reviews.filter(review => review.id === first);
    // setCurrent(firstReview);
    // console.log("firstReview in Mapping: ", firstReview);
    // reviews.forEach(review => {
    //   console.log(typeof(review.id));
    // })
    // console.log("currentReview: ", currentReview);
   
    return(
      <div class="ParentContainer">
      {/* <h2> Happy Effort Day! Kainaat K HAQ BADSHAH </h2> */}
        {<ShowReviews review={current} handleNext={handleNext} handlePrev={handlePrev} handleRandom ={handleRandom}/>}
      </div>
    )

}

export default Mapping