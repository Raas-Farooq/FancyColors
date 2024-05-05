import React,{useState,useEffect,useRef} from 'react';
import {v4 as uuidv4} from 'uuid'; 
import sliderData from './data.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlidesMap from './tabsData';
import './index.css';
// import MapReviews from './MappingReviews.js';


function App(){
  const [invaluable, setInvaluable] = useState(sliderData)
  console.log("Slider Data: ",sliderData);
 return(
    <>
     <h2>AR REHMAN </h2>
     <SlidesMap views = {invaluable} ></SlidesMap>
    </>
    )
  }
export default App;


