import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../DataAdmin/Data";
import axios from "axios";
import {useState,useEffect} from "react"
const feedBackNames=JSON.parse(localStorage.getItem("buyername"))||[];

const getItems=()=>{

  return axios.get(`http://localhost:4000/api/users`)
  
  }



const Updates = () => {

  const [data,setData]=useState([])
 console.log(data)
  useEffect(()=>{
    getItems()
    .then((res)=>  
    setData(res.data))
    .catch((err)=>console.log(err))

  },[])
  

  return (
    <div className="Updates">
      {data.map((update) => {
        return (
          <div className="update">
            {/* <img src={update.img} alt="profile" /> */}
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span style={{ fontFamily:"'Philosopher', sans-serif;"}}>{update.names}</span>
                <span style={{ fontFamily:"'Philosopher', sans-serif;"}}> {update.feedback}</span>
              </div>
                <span>10:30 Am</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
