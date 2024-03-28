import React,{useState,useEffect} from 'react';
import {v4 as uuidv4} from 'uuid'; 
import './index.css';
import ShowTours from './displayTours';

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


  function getClicked(target){
    const container = document.querySelector('.ToursContainer');
    const specialId = target.id;
    console.log("specialId: ", specialId);
    const tourCard = target.closest('.toursCard');
    if (tourCard) {
      fetch('http://localhost:5000/removeElement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({id: specialId })
      })
      
      .then(response => response.json()).then(
        data => {
          console.log("this is the Data: ", data);
        }).catch(err => {
          console.log("Love the Weaknesses Of Life: ", err);
        })
        tourCard.remove(tourCard);
    }
    // container.remove(target);
  }


return (
  <div>
    <h2> Tours Of Life</h2>
    <div className="ToursContainer">
    {myTours.map(tour => {
        return (
           <div class="toursCard"><ShowTours tour={tour} remove={getClicked} /> </div>
        )
      })}
    </div>
  </div>
)

}
export default App;


