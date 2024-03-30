import React from 'react';
import ShowTours from './displayTours';
import './index.css';

function Mapping({tours}){

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
    console.log("Your Tours Received: ", tours);
    return(
        <div className="ToursContainer">
            {tours.map(tour => {
                return (
                <div class="toursCard"><ShowTours tour={tour} remove={getClicked} /> </div>
                )
            })}
        </div>
    )

}

export default Mapping