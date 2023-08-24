import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div>


        <h1>Yolunu mu kayıp ettin?</h1>
        <Link to="/">
            AnaSayfaya Geri Dön
        </Link>
    </div>
  )
}
