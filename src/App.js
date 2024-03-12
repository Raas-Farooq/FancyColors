import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './index.css';
import UserInput from './Input.js';
import ShowNotes from './showNote';



function App() {
  // console.log("Ganoodgi is Blessing Itself")
  // const [titleList, setTitleList ] = useState();
  // const [contentList, setContentList ] = useState();

  // const [boxContent, setBoxContent]= useState([]);
  
  
  // function havingData(tit, not){
  //   setBoxContent((prev) => [...prev, {id: uuidv4(), tit,not}]);
  // }

  // function removeContent(id){
  //   setBoxContent(boxContent.filter(note => note.id != id));
  // }

  const [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes((prev) => [...prev, note])
    // setNotes((prevNotes) => [...prevNotes, {id:uuidv4(), title, content}]);
  }

  function removeNote(id){
    setNotes(prev => prev.filter((not, ind) => ind !== id))
  }
 

  return (
    
    <div className="App">
      <header className="App-header">
        <h1> Life Is Hard Choose Your Hard</h1>
      </header>  
        <div className='box'>
          <UserInput addNote={addNote} ></UserInput>
         
        </div>
        <div className="list">
        <ShowNotes myNotes = {notes} removeNote = {removeNote} ></ShowNotes>
        </div>
    </div>
  );
}


export default App;
