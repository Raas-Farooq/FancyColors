import React,{useState,useRef,useEffect} from 'react';


function Links(props){
    // console.log("Tabs in LINK: ", props.allTabs)
    
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log(" Clicked ");
    //     props.current(e.target);
    // }
    
    return(
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:'20px'}}>
            
            <div>
            {props.allTabs.map((tab,ind) => 
            {
                return(
                    <div key={tab.id}>
                        <botton onClick={()=> props.current(ind)} className="btn btn-warning" style={{marginBottom:"15px"}}>{tab.company}</botton>
                    </div>
                    )
                
            })}
                
            </div>
        </div>
        
    )
}
export default Links
