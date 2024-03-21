import React,{useState,useEffect} from 'react';
import {v4 as uuidv4} from 'uuid'; 
import './index.css';
// import birthdayData from './data.mjs'
import RevealBD from './showBirthday.js'

function App(){
  const [birthdayData, setBirthdayData] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/start').then(response => response.json()).
    then(data => {
      console.log('Insight of data: ', data);
      setBirthdayData(data);
    }).
    catch(err => console.log("Effort:lets seee the Problem and Solve it by THe Help Of Allah(SWT)  ", err))
  }, []);
  
const modifyBD = (e) => {
  
  e.preventDefault();
  fetch('http://localhost:5000/clear').then
  (response => {
    console.log('Response status:', response.status);
    response.json()
}).then(data => {
    console.log('data hass removed');
    setBirthdayData([])
  }).catch(err => {
    console.log("see Your mistakes in positive Way: ", err);
  })
  
}
  return (
    <div className="container">
      {console.log("Fast Recovery:", birthdayData)}
        <div className="centerBox">
            <h3>{birthdayData.length} BirthDay Celebrations</h3>
              <RevealBD birthdayData ={birthdayData} />
            <button onClick={modifyBD}> Clear </button>
        </div>
    </div> 
  )

}

export default App;
