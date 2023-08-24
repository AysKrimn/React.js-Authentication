import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UrunDetay(props) {

  const { sepet, setSepet } = props

  // state
  const [product, setProduct] = useState({})
  const [err, setErr] = useState(false)
  const { id } = useParams()
  // yonlendirmek fonksiyonu belirle
  const yonlendir = useNavigate()
  // sayfa load oldugunda useeefectti cagir
  useEffect(() => {

    // asenkron olarak çalışan bir fn yarat
    const makeAPIRequest = async () => {

        try {


      
        const request = await fetch(`https://fakestoreapi.com/products/${id}`)
        const response = await request.json()

        // state güncelle
        setProduct(response)

       } catch(e) {
        // herhangi bir hata meydana geldiğinde:
    
        setErr(true)
       } 

    }
    // sayfa yüklendiginde bu fonksiyonu calisstir
    makeAPIRequest()

  }, [id])


  if (err) {
    return yonlendir("/404")
  }
  // sepete ekleyen fonksiyon
  const addSepet = () => {

    setSepet([...sepet, product])
    alert("Sepete eklendi.")

  }

  if (!Object.entries(product).length) {

    return <p>Veriler yükleniyor lütfen bekleyiniz...</p>
  }
  
  return (

    <>
    
    <h1>{product.title}</h1>

    <div className='mt-2'>
    <p className='text-start'> <b>Ürünün Açıklaması:</b></p>
    <p>{product.description}</p>

    </div>


    <div className="row">

    <div className="col-md-6 showcase">

    <div>
    <img src={product.image} alt={product.title} />
    </div>


    </div>


    <div className="col-md-6 align-self-center">

      <p>Puan: {product.rating.rate} ({product.rating.count} kişi oylamaya katıldı)</p>

      <div className='buttons'>

            <button onClick={() => alert("Bu işlemi maalesef yapamıyoruz.")}>Satın Al</button> 
            <button onClick={addSepet}>Daha Sonra Satın Al</button>
      </div>



    </div>

    </div>

    </>
  )
}
