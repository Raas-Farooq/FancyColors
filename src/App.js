import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './index.css';
import birthdayData from './data.js'
import RevealBD from './showBirthday.js'

function App(){
console.log("data: ", birthdayData);
const [info, setInfo] = useState(birthdayData);
console.log("info: ", info);
const modifyBD = (e) => {
  e.preventDefault();
  setInfo('');
}
  return (
    <div className="container">
      
        <div className="centerBox">
            <h3> BirthDay Celebrations</h3>
              <RevealBD birthdayData ={info} />
            <button onClick={modifyBD}> Clear </button>
        </div>
        
    </div>
    
    
  )

}

export default App;
