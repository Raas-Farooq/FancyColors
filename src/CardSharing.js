import React,{useState,useEffect,useRef} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import Links from './links.js';
import DisplayCard from './displayCards';
import './index.css';

function ShareCards({myCards}){

  const [link, setLink] = useState(myCards);

  useEffect = (() => {
    setLink(myCards);
  },[])
  const handleLinks = (e, resp) =>  {
    e.preventDefault();
    console.log("the is the Tab: ", resp);
    // First Method where data is filtered in the Return instead of Function
    // if(resp === 'All'){
    //   setLink('')
    // }else{
    //   setLink(resp);
    // }

    //Second Method Data is Filtered here
    if(resp === 'All'){
      setLink(myCards)
    }else{
      const singleTab = myCards.filter(card => card.category === resp)
      setLink(singleTab);
    }
  }

  return(
   <>
   <Links cards={myCards} handleLinks={handleLinks}/>
   <div style={{display:"grid",gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap:'10px'}}>
   {console.log("Link: ", link)}
   {!link.length? (<h2>LOADING MENU..</h2> ):
    
    link.map(card => <DisplayCard card={card} />)

   }
   {/* First Method where data is filtered in the Return instead of Function */}
    {/* {(!link) ? 
      myCards.map(card => <DisplayCard card={card} />)
      : 
      myCards.filter(card => card.category === link).map(resultedCard => (<DisplayCard card={resultedCard} />) )
    
    } */}
   </div>
   {/* <DisplayCard card={card} /> */}
    {/* {myCards.map(card => <DisplayCard card={card} />)} */}
   
    
   </>
  )  

}

export default ShareCards

