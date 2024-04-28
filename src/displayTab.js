import React,{useState} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import './index.css'
// review,
function DisplayTab(props)
{
    
    console.log("props.tab in display", props.tab);

    return(
        <>
            <div style={{width:'550px'}}>
            <h1 style={{}}>Experience </h1>
                <span style={{width:"180px", border:"2px solid lightgreen", display:"flex",marginBottom:"20px"}}></span>
                <h3>{props.tab.title}</h3>
                <strong> {props.tab.company} </strong>
                <h6 style={{color:'grey', fontSize:"12px"}}>{props.tab.dates}</h6>

                <p>
                 {props.tab.duties}
                </p>
                <botton className="btn btn-danger" style={{marginBottom:"15px"}}>MoreInfo</botton>
            </div>
        </>
    )
    
}

export default DisplayTab


  