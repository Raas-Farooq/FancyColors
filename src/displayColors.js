import React,{useState,useEffect} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import styles from './index.module.css';


function DisplayColors({rgb, weight,hex, index})
{
    const [clicked, setClicked] = useState(false)
    console.log("rgb + weight: ",`${rgb} + ${hex}`);
//    const [quotes, setQuotes] = useState(quote);
//    console.log("new QUte: ",quotes);
    let myRgb = rgb.join(',');
   useEffect(() => {
    if(clicked){
        const showing = setTimeout(() => {
            setClicked(false)
        }, 2000);
        return clearTimeout(showing)
    }
    
   }, [clicked]);
   

    return (
        <>
          
            <div 
            key={index} 
            style={{background:`rgb(${rgb.join(',')})`, width:"200px",height:"220px"}}
            onClick={() => 
            {
                setClicked(true);
                navigator.clipboard.writeText(hex);
                
            }
            }>
              <h5>{hex}</h5>
               <p>{clicked ?`Copied` : null }</p>
            </div>
            
        
        </>
    )
}



export default DisplayColors;


  