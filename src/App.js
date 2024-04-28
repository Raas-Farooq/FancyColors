import React,{useState,useEffect,useRef} from 'react';
import {v4 as uuidv4} from 'uuid'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import TabsData from './tabsData';
import './index.css';
// import MapReviews from './MappingReviews.js';


function App(){
  const [tabs, setTabs] = useState([])
  const myCompanies = ['TOMMY', 'BIGDROP']
  useEffect(() => {

  console.log("App UseEffect Focusing")
  fetch('http://localhost:5000/loaded').then(response => 
  response.json()).
  then(data => {
    setTabs(data);
  }).
    catch(err => console.log("Here is THe Challenge: ", err))

  },[])

 return(
    <>
    {(!tabs.length)? <h2> Still Loading..</h2> 
    :
     <>
      
      <TabsData myTabs={tabs} />
     </>
    }
    
    </>
  )
}
export default App;


