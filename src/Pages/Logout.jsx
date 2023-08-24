import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Logout() {

  const [done, setDone] = useState(false)


  useEffect(() => {

    const details = localStorage.getItem("userInfo")

    if (details) {
  
      localStorage.removeItem("userInfo")
  
    }


    setDone(true)


  }, [])
    
 
  
  return (

    <>

      { done 

      ? 
        <Navigate to="/"></Navigate>
      : null
      }

    </>
  )
}
