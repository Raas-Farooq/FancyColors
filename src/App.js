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
      console.log('fetched Raheem: ', data);
      setBirthdayData(data)
    }).
    catch(err => console.log("Effort:lets seee the Problem and Solve it by THe Help Of Allah(SWT)  ", err))
  }, []);
  // fetch('http://localhost:5000/start').then(response => response.json()).
  // then(data => 
  //   {
  //     data.forEach(person => 
  //     {
  //       console.log("this is the fetched legal Info: ", person)
  // })
   
  // }).catch(err => console.log("lets seee the Problem and Solve it by THe Help Of Allah(SWT) ", err))
// console.log("data: ", birthdayData);

// const [info, setInfo] = useState(birthdayData);
// console.log("info: ", info);


// const modifyBD = (e) => {
//   e.preventDefault();
//   setInfo('');
// }
  return (
    <div className="container">
      {console.log("Fast Recovery:", birthdayData)}
        <div className="centerBox">
            <h3> BirthDay Celebrations</h3>
              {/* <RevealBD birthdayData ={info} /> */}
            {/* <button onClick={modifyBD}> Clear </button> */}
        </div>
    </div> 
  )

}

export default App;
