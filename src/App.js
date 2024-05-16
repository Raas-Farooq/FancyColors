import React,{useState,useEffect,useRef} from 'react';
import {v4 as uuidv4} from 'uuid'; 
import fewMade from './data.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayColors from './displayColors.js';
import styles from './index.module.css';
import values from 'values.js';

// import MapReviews from './MappingReviews.js'

function App(){

  const [colorCode, setColorCode] = useState('#2816A5');
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState(new values('#2816A5').all(15));

  // console.log("MYChoi: ", newQuotes);

  const handleValue = (e) => {
    e.preventDefault();
    console.log("You Clicked Effort");
    // myNum.current = myNum.current + 1;
    try{
      
      let mySuperColors = new values(colorCode).all(15);
      console.log("mySuperColors ", mySuperColors);
      setColorList(mySuperColors);
      setError(false);
    }
    catch(err){
      setError(true);
      console.log("this is the Err: ",err);
    }
     
    
  }

  // useEffect(() => {
    
  //   console.log(" UseEffect ", myNum);
  // }, [myNum.current])

 return(
    <>
      <div className="SearchHeader">
        <h2> Al HAYYU Al QAYYUM THE START AND THE END</h2>

        <form onSubmit ={handleValue}>
          <input type='text' value={colorCode} className={`${error? styles.colorNotFound :  null}`} onChange={(e) => setColorCode(e.target.value)} placeholder={colorCode} ></input>
          <button type="submit"> Effort </button>
        </form> 
      </div>
     
      <div style={{display:"flex",flexWrap:"wrap",gap:"20px" }}>
        {!colorList.length ? <h2> Al GHANNI </h2>:
          colorList.map((myColor,i) => <DisplayColors index={i} key={i} {...myColor} hex={myColor.hex} />)
        }
      </div>
    
     {/* <button onClick={handleNum}> Effort </button> */}
    </>
    )

}
export default App;



