import React,{useState,useEffect,useRef} from 'react';
import {v4 as uuidv4} from 'uuid'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Cards from './data.mjs';
import ShareCards from './CardSharing.js';
// import MapReviews from './MappingReviews.js';


function App(){
//  console.log("CArds: ",Cards);

 return(
  <>
    <h2> Ultimate Destination JANNAT </h2>
    <ShareCards myCards={Cards} />
  </>
 )
}
export default App;


