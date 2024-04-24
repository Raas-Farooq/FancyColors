import React,{useState} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import './index.css'
// review,
function displayCard(props)
{
    console.log("props.card inside DisplayCards: ",props.card);

    return (
        <div className="myCard">
            <div className="review" id={props.card.id} key={props.card.id}>
                <img className="my-img" src={props.card.img} height="200px" width="180px" />
                <div class="priceName">
                    <h3 className="name"> {props.card.name}</h3> 
                    {/* <h6 className="name"> {props.card.category}</h6>  */}

                </div>
               
            </div>
        </div>
    )
    
}

export default displayCard


  