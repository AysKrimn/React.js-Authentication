import React, { useState, useContext } from 'react'
import { Yetkilendirme } from '../Context/AuthProvider'
import { useNavigate } from 'react-router-dom'


export default function Login() {


  const yonlendir = useNavigate()
  // providerden setteri al
  const { user, setUser } = useContext(Yetkilendirme)

  if (user) {

    // kullanici zaten giris yapmissia anasayfaya yonlendir
    yonlendir('/')
    
  }



  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  
  const db = [

    { id: 1231, name: "ömer", password: "123", role: "Admin" },
    { id: 2341, name: "murat", password: "12345", role: "User" },

  ]

  const showData = () => {
    let output = ""
    db.forEach((hesap, index) => output += `${index + 1} - Kullanıcı adı: ${hesap.name}\nŞifre: ${hesap.password}\nRol: ${hesap.role}\n`)
    alert(output)
  }
  // giris yap fonksiyonu 
  const handleLogin = () => {

      const foundUser = db.find(data => data.name === username && data.password === password)

      if (foundUser) {

        // stringe çevir objeyi
        const userModel = JSON.stringify(foundUser)
        // locale kaydet
        localStorage.setItem("userInfo", userModel)
        
        setUser(foundUser)
        // admin  syf yönlendir
        if (foundUser.role === "Admin") {  yonlendir("/admin") }
        // anasyf yönlendir
        if (foundUser.role === "User") { yonlendir('/')}

     
       
      } else {

        alert("Kullanıcı adı veya şifre yanlış")
      }
  }

  return (

    <>
    
    <h3>Giriş Yap</h3>
    <hr />

    <div style={{marginTop: "1rem"}}>

 
        <div className='w-50'>
        <div className='mb-3'>
        <input className='form-control' type="text" placeholder='Kullanıcı Adınız' onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className='mb-3'>
        <input className='form-control' type="password" placeholder='Şifreniz' onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div>
          <p onClick={showData} style={{cursor: "pointer"}} className='text-start text-muted'>Şifreni mi unuttum </p>
        </div>
        <div className='mb-3'>
        <button className='btn btn-success' onClick={handleLogin}>Giriş Yap</button>  

        </div>
        </div>


    </div>

    
    </>
  )
}
