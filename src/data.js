import React,{useState,useEffect} from 'react';
// import Button from '@mui/icons-material/Button';

function Input(props){
  const [noteInput, setNoteInput] = useState({
    title:"",
    content:""
  })

  const handleChange = (e) => {
    e.preventDefault();
     const {name, value} = e.target;
     console.log("name: ", name);
     console.log("vlaue; ", value);
     setNoteInput((prev) => {
      return{
        ...prev, [name]:value
      }
     })
  }
  const handleAdd = (e) => {
    
    props.addNote(noteInput);
    e.preventDefault();
    setNoteInput({
      title:"",
      content:""
    })
  }
    // console.log("these are your props: ", props.fun);
      return (
        <div>
            <input type='text' name = 'title' onChange={handleChange} id='title' placeholder="write the title" value={noteInput.title} />
            <textArea name='content' id='content' onChange={handleChange} placeholder="write the Content" rows="8" cols="25" value={noteInput.content} />
            
            <button className="btn" onClick={(e) => {
              // e.preventDefault();
              // props.addNote(title,content);
              // handleAdd();
              // setContent("");
              handleAdd(e);

              document.getElementById('content').value = "";
              // setTitle('');

            }}>Add</button>
      </div>
    )
}

export default Input;