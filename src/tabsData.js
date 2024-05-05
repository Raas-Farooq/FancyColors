import React,{useState,useEffect,useRef} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import ShowSlides from './displayTab';
import './index.css';

function SlidesMapping(props){
    const [slideNum, setSlideNum] = useState(0);
    const [slide, setSlide] = useState(props.views[slideNum]);
    const [allSlides, setAllSlide] = useState(props.views);

    function handleIndex(val){
        console.log("Val Handle Index: ",val)
        setSlideNum(val);
        
    }
    useEffect(() => {
        setSlide(allSlides[slideNum])
        // console.log("slide Num Handle Index useeFFECT: ",slideNum);
        // console.log("Current Slide useeFFECT: ",slide)
    },[slideNum])


    // console.log("slide: ", slide);
    return(
        <>
            <h3>Allah(SWT) mercy</h3>
            <div style={{ display:"flex", justifyContent:"center"}}>
                <ShowSlides slide={slide} allSlides={allSlides} handleIndex={handleIndex}></ShowSlides>
            </div>
            
        </>
    )
  
}


export default SlidesMapping
