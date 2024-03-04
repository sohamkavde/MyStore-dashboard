"use client"
import React from 'react'

function Burger() {
    const open = ()=>{
        if(document.getElementById("sidebar").style.display == "block"){
          document.getElementById("sidebar").style.display = "none";
        }else{
          document.getElementById("sidebar").style.display = "block";
        }
      }
  return (
    <div>      
       <p className="navbar-brand burgerOpenClose" style={{cursor:"pointer"}} onClick={open}><i className="bi bi-list"></i></p>
    </div>
  )
}

export default Burger;
