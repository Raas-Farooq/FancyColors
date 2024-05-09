import React,{useState,useEffect,useRef} from 'react';
import {v4 as uuidv4} from 'uuid'; 
import fewMade from './data.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuotesHandle from './getQuotes';
import styles from './index.module.css';
// import MapReviews from './MappingReviews.js';


function App(){

  const [allQuotes, setAllQuotes] = useState(fewMade);
  // console.log("few Made for independence: ", fewMade);
 return(
    <>
     <h2> All WatchFul </h2>
     <QuotesHandle quotes = {allQuotes} />
    </>
    )
  }
export default App;



