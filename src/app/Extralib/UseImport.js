'use client'
import { useEffect } from "react";

function UseImport() {
    useEffect(()=>{
        require("../../../node_modules/bootstrap/dist/js/bootstrap.min.js")
        require("../../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css")
      },[]);
  return (
   null
  )
}

export default UseImport;
