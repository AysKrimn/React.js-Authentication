import React, { useContext } from 'react'
import { Yetkilendirme } from '../Context/AuthProvider'
import { Outlet, Navigate } from 'react-router-dom'

export default function PermissionRequired() {
  
  const { user } = useContext(Yetkilendirme) 


  return (

    <>

            {
              user.role === "Admin"
              
              ? 
                <Outlet></Outlet>

            : 
                <Navigate to="not-found"></Navigate>
            }    
    
    </>
  )
}
