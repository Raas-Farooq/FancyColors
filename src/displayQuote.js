import React,{useState,useEffect} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import myclass from './index.module.css';


function DisplayQuotes({quote})
{
    // console.log("myclass: ",myclass)
   const [quotes, setQuotes] = useState(quote);
   console.log("new QUte: ",quotes);

   useEffect(() => {
    setQuotes(quote);
   }, [quote]);
   
    return (
        <>
            <div className={myclass.quoteStyle} >
                {quotes.map(quote => {
                    return (
                        <div key={quote.id} >
                            <p className={myclass.superColor}>{quote.quote} </p>
                        </div>
                    )
                    
                
                })}
               
            
            </div>
        </>
    )
}



export default DisplayQuotes;


  