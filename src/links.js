import React,{useState,useRef,useEffect} from 'react';


function Links(props){
    // console.log("cards inside Link", props.cards)
    const myList=props.cards.map(card => card.category);
    let consistency = ['All']
    const separate = [...new Set(myList)]
    
    consistency.push(...separate);

    // console.log("consistency", consistency);
    const handleClick = (e) => {
        e.preventDefault();
        console.log("e.target: ", e.target.textContent);
        const link = e.target.textContent;
        props.handleLinks(e, link)
    }
    return(
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            {consistency.map(link => {
                return(
                    <div >
                        <ul style={{display:"flex",listStyle:"none"}}>
                        <button className="btn btn-danger" onClick={(e) => handleClick(e)}>{link}</button>
                        </ul>
                    </div>
                )
                
            })}
            
        </div>
        
    )
}
export default Links
