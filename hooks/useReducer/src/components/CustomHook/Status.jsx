import React from "react";
import { useEffect } from "react";

const useStatus=(online)=>{
    useEffect(()=>{
       // document.title=online?'Online':'Offline'
    },[online])
}
export default useStatus