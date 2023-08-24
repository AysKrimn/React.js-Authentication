import React, { useContext, useEffect } from 'react'
import { Yetkilendirme } from '../Context/AuthProvider'
import { Outlet } from 'react-router-dom'


export default function GetUserData() {

  const { setUser } = useContext(Yetkilendirme)

    useEffect(() => {

        const userInfo = localStorage.getItem('userInfo')

        if (userInfo) {

            const parseModel = JSON.parse(userInfo)
            setUser(parseModel)
        }
        
    }, [setUser])

  return (
    
    <>
    
        <Outlet></Outlet>

    </>
  )
}
