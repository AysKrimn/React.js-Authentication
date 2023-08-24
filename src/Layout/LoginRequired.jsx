import React, { useContext } from 'react'
import { Yetkilendirme } from '../Context/AuthProvider'
import { Outlet } from 'react-router-dom'


export default function LoginRequired() {

  const { user } = useContext(Yetkilendirme)

  return (
    
    <>
    
        {
            user !== null

            ?
                <Outlet></Outlet>
            : 
                <h1>Burayı görebilmek için giriş yapman gerekiyor.</h1>
        }
    
    </>
  )
}
