import React,{useState,useEffect,useRef} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import Links from './links.js';
import DisplayTab from './displayTab';
import './index.css';

function TabsData({myTabs}){
  
  const [num, setNum] = useState(0);
  const [tab, setTab]= useState(myTabs[(num)])
  // console.log("tab inside TABSSHARING:", tab);
  
  const clicked = (data) => {
    console.log("data: ",data);
    // const clickedTab = myTabs.filter(tab => tab.company ===data.textContent);
    // console.log("Clicked Tab: ", clickedTab)
    setNum(data)
    console.log("data After Setting: ", num)
  }

  return(
   <div style={{display:"flex", gap:"100px"}}>
    <Links allTabs={myTabs} current = {clicked} num={num} />
    <DisplayTab tab={myTabs[num]} />
   </div>
  )  

}

export default TabsData

