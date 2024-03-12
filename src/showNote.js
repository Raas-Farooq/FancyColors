import React, {useState} from 'react';
import './index.css'

function Showing(props){
    console.log("props.boxNote ", props.myNotes);
    // function removeElement(e){
    //     let content = e.target.previousSibling.textContent;
    //     const title = e.target.previousSibling.previousSibling.value;
    //     const titleList = props.title;
    //     let contentList = props.content;
    //     content = content.trim();
    //     const titleInd = titleList.indexOf(title);
    //     const contentInd = contentList.indexOf(content);
    //     contentList.splice(contentInd,1);
    //     titleList.splice(titleInd,1);
    //     props.setTitle(titleList);
    //     props.setContent(contentList);
    //     // console.log("content Ind: in removeElement ", contentInd);
    //     e.target.parentElement.remove();
        
    // }

    // console.log("titleLIst= ", props.title);
    // console.log("contentLIst= ", props.content);
    return(
        props.myNotes.map((content,ind) => {
            // {console.log("in a showNote REturn: ",props.content[i])}
            // {console.log("in a showNote REturn: ", t)}
            return(
                <div key={ind} id="showCard">
              
                    <input type='text' id ="showTitle" value={content.title} readOnly />
                    <p id="showContent"> {content.content} </p>
                   
                    <button id="del" onClick={() => props.removeNote(ind)} > delete </button>
                </div>      
        )
        })
    )
    
    
}

export default Showing