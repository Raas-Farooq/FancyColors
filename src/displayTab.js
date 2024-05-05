import React,{useState,useEffect} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import './index.css';


function DisplaySlides({slide,allSlides,handleIndex})
{
    let [ind, setInd] = useState((0));

    useEffect(() => {
        
        let slider = setInterval(() => {
            console.log("ind in first UseEffcect: ",ind);
            // console.log("ind in first UseEffcect: ",ind);
            let num = ind === (allSlides.length - 1)? 0 : ind+1;
            console.log("num in first UseEffcect: ", num);
            setInd(num);
            handleIndex(num)
        },5000)
        return () => clearInterval(slider);
    },[ind])
    const modifyNext = () => {
    
        console.log(" Nex modify ind: ",ind);
        const num = ind === (allSlides.length - 1) ? 0 : ind + 1;
        console.log("modify Next Num:",num);
        setInd(num);
        handleIndex(num);
        // timerFun();
    }

    const modifyPrev = () => {
        let num;
        num = ind === 0 ? (allSlides.length - 1): ind-1;
        
        console.log("modifyPre ind: ",ind )
        setInd(num);
        handleIndex(num);
        // timerFun();
    }
    
    return(
        <div style={{display:"flex"}}>
            <button className="myBtn" onClick={modifyPrev}> Prev </button>
            <div className="myCard" style={{display:"flex"}}>

                <div key={slide.id}>
                    <img  src={slide.image} width="120px" height="80px"></img>
                    <h3>{slide.title}</h3>
                    <h5>{slide.name}</h5>
                    <p>{slide.quote}</p>
                </div>

           
            </div>
            <button className="nextBtn" onClick={modifyNext}> Next </button>
        </div>
    )
    
}



export default DisplaySlides;


  