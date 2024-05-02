import React, { useEffect } from 'react'

const useBackground=(color)=>{
useEffect(()=>{
    document.body.style.backgroundColor=color
 

},[color])
}
export default useBackground;