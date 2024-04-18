import React,{useState,useEffect} from 'react';

import ShowReviews from './displayReviews';
import './index.css';

function Mapping({reviews, currentReview}){

const [current, setCurrent] = useState([]);
const [initialReviewSet, setInitialReviewSet] = useState(false);
let [id, setId] = useState(1);

  
  useEffect(() => {
    // console.log("UseEffect of MApping RREVIEWS: ", reviews[0]);
    if(reviews.length > 0 && !initialReviewSet) {
       console.log("reviews in USEFFECT: ", reviews);
      setCurrent([reviews[0]]); // Set the first review as current when reviews array changes

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
      console.log("Type Of handleNext Id: ", typeof(id));
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
        id = reviews.length;
        setId(id);
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
      let num = Math.floor(Math.random() * reviews.length+1);
      console.log("Reviews.length", reviews.length);
      if(num === id){
        num++;
        if(num === reviews.length){
          num = 1;
        }
      }
      console.log("This is the Id", id);
      console.log("This is the random NUm", num);
      fetch(`http://localhost:5000/random?id=${num}`).then
      (response => response.json()).
      then(data => {
        // console.log("DATA IN RANDOM: ", data);
        setCurrent(data);
      }).catch(
        err => console.log("Alhamdulila What he has Decreed!: ", err)
      ) 
      setId(num);  
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
      {/* {console.log("current in Mapping Review Return: ", current)} */}
      {(!current.length) ? 
        (<h3> Your Review is Being Loaded</h3>): 
        (<ShowReviews review={current} handleNext={handleNext} handlePrev={handlePrev} handleRandom ={handleRandom}/>)
      }
        
      </div>
    )

}

export default Mapping