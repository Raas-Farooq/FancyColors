import React,{useState,useEffect,useRef} from 'react';
import {v4 as uuidv4} from 'uuid'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Reviews from './data.mjs';
// import ShowTours from './displayTours';
import MapReviews from './MappingReviews.js';


function App(){
  const [myReviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState(null);
  const [upload, setUpload] = useState(false);

useEffect(() => {

  fetch('http://localhost:5000/load').
  then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .
  then(data => {
    setUpload(true);
    console.log("getFetched: ", data);
    setReviews(data);
    setCurrentReview(data[0] || null);
  }).
  catch(err => console.log("Belive in Resolving Errs: ", err));
  
}, []);
  return (
    <>
      {(!myReviews.length)?(<div> <h2> Waiting For Reviews</h2></div>)
    : (<>
      {console.log("My REVIEWS IN APP: ",myReviews)}
      <h3> Alhamdulila! Back Again</h3>
      <MapReviews reviews = {myReviews} currentReview = {currentReview} />
      
    </>)
    }
    </>
  )
}
export default App;


