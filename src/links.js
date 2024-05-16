import React,{useState,useRef,useEffect} from 'react';


function GetInput(props){

    const [desire, setDesire] = useState('');
    let myText = useRef(null);
    

    function isNumber(num){
        return typeof(num) === 'number';
    }
    const handleText = (e) => {
        e.preventDefault();
        console.log("e.target.value",e.target.value);
        let yourDesire = e.target.value;
        yourDesire = parseFloat(yourDesire);
        yourDesire = Math.abs(yourDesire)
        setDesire(yourDesire);
        console.log("type of Desire: ", typeof(yourDesire));
      }

     const graspNum = (e) => {
        e.preventDefault();
        console.log("desire",desire );
        
        if(!desire || isNaN(desire)){
            alert("Plz Enter Num", desire);
            console.log("type", typeof(desire));
            console.log("desire", desire);
            myText.current.value = '';
          }
        else if(desire > props.quotes.length){
            alert("Out Of Stock");
            alert("Enter within 10");
            myText.current.value = '';
        }
        else{
            // console.log("type of Desire: ", typeof(yourDesire));
            props.catch(desire);
            myText.current.value = '';
        }
        
    }
      

    return (
        <>
            <form onSubmit={graspNum}>
                <input type='text' id='text' ref={myText} onChange={handleText} placeholder="How many Paragraphs"></input>
            </form>
        </>
    )
}
// export default GetInput
