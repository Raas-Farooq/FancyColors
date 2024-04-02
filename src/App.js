import React,{useState,useEffect,useRef} from 'react';
import {v4 as uuidv4} from 'uuid'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ShowTours from './displayTours';
import MapTours from './MappingTours.js';


function App(){
  const [myTours, setTours] = useState([]);
  const [upload, setUpload] = useState(false);
  // const forceUpdate = useRef(null);
  console.log("Tours immediate: ", myTours);
  
  useEffect(() => {
    setUpload(true)
    fetch('http://localhost:5000/load').then(response => response.json()).
    then(data => {
      console.log('Insight of data: ', data);
      setTours(data);
      // setUpload(false);
    }).catch(err => {
      setUpload(false)
      console.log("Effort:lets seee the Problem and Solve it by THe Help Of Allah(SWT)  ", err);
    })
  }, []);
 

  function handleRefresh(){
    console.log("loaded");
    setUpload(true)
    fetch('http://localhost:5000/loadData').then(
      response => response.json()
    ).then(data => {
      setTours(data);
      // setUpload(false);
    }
    ).catch(err => {
      console.log("you dont have enough Errs : ", err);
      setUpload(false);
    })
  }

  return (
      <div>
        {upload ?(
          <div>
              <h2> Tours Of Life</h2>
              <div>
                <MapTours tours={myTours}  />
              </div>
          </div>
          ) : (
          <h2> Still Waiting For You</h2>
        )}
          <button className="refresh btn btn-danger" id="refresh" onClick={handleRefresh} > LoadAllData</button>
      </div> 
      )
}
export default App;


