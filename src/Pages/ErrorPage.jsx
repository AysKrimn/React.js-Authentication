import React from 'react'
import { Link } from 'react-router-dom'


export default function ErrorPage() {
  return (
    <div>
      
      <h1>Üzgünüz... Aradığınız ürünü bulamadık.</h1>
      <p style={{textAlign: "start"}}>Keyfiniz kaçmasın, aramaya devam edin:</p>
      <Link to="/">
          AnaSayfaya git
      </Link>
    </div>
  )
}
