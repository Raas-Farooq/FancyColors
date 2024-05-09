import React,{useState,useEffect,useRef} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import RevealQuote from './displayQuote';
import Input from './links.js';
import classes from './index.module.css';

function QuotesContainer(props){
  const [randomNum, setRandom] = useState(0);
  const [desire, setDesire] = useState('');
  const [quote, setQuote] = useState([])


    let random;

    

    const catchNum = (num) => {
      // e.preventDefault();
      // console.log("Form Submitted");
      // console.log("what is the type of Desire: ", typeof(desire));

        let newList = [];
        for(let i = 0; i < num; i++){
          newList.push(props.quotes[i]);
        }
        setQuote(newList);

      
      
      // setQuote(randomNum);
    }

    useEffect(() => {
      setQuote([props.quotes[0]]);
    }, [])
    console.log("actual quote:", quote);
    
//  console.log("props.quotes", quote);
  return(
    <>
      <div>
        <Input catch={catchNum} quotes={props.quotes} />
        <h3>Quote of Belief</h3>

        {console.log("length: ", quote)}
        {(!quote.length) ? <h5> Wait.. </h5>
        :
        <RevealQuote quote={quote}  />
        }
        
      </div>
       
    </>
  )
}

export default QuotesContainer
