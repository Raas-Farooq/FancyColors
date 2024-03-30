import React,{useState,useEffect} from 'react';
import {v4 as uuidv4} from 'uuid'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ShowTours from './displayTours';
import MapTours from './MappingTours.js';


function App(){
  const [myTours, setTours] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/load').then(response => response.json()).
    then(data => {
      console.log('Insight of data: ', data);
      setTours(data);
      console.log('myTours: ', myTours);
    }).
    catch(err => console.log("Effort:lets seee the Problem and Solve it by THe Help Of Allah(SWT)  ", err))
  }, []);


  

function handleRefresh(){
  console.log("loaded");
  fetch('http://localhost:5000/loadData').then(
    response => response.json()
  ).then(data => {
    console.log("my recieved Data: ", data);
    setTours(data);
  }).catch(err => {
    console.log("you dont have enough Errs : ", err);
  })
}

return (
  <div>
    <h2> Tours Of Life</h2>
    
    <div>
      <MapTours tours={myTours} />
      <button className="refresh btn btn-danger" onClick={handleRefresh} style={{position:"absolute", left:"44%"}} > LoadAllData</button>
    </div>
   
   
  </div>
)

}
export default App;


