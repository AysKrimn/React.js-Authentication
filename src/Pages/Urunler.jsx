import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import Card from 'react-bootstrap/Card';

export default function Urunler() {


  const [data, setData] = useState([])
  const [dataError, setDataError] = useState(false)

  const truncateText = (metin) => {

    if (metin.length >= 30) {
        metin =  metin.slice(0,30) + "..."
    }

    // if çalışmazsa yinede metini döndür.
    return metin
  }
  // useEffect genel amaclı kullanılır ama daha cok apilara istek atmak icin kullanılır
  useEffect(() => {

    const apiRequest = async () => {

        try {
          const request = await fetch('https://fakestoreapi.com/products')
          const response = await request.json()
          console.log("apidan gelen veri:", response)
          setData(response)

        } catch {

          setDataError(true)

        }
       

       
    }    

    // fonksiyonu tetikle:
    apiRequest()

  }, [])


  if (dataError) {

    return <div>Üzgünüz şuanda bağlanamıyoruz lütfen daha sonra tekrar deneyiniz.</div>
  }
  return (
  

    <>
    
    <h1>Ürünlerimiz</h1>
    <hr></hr>



    <div className='row'>
    {data.map(product => {


    return <div key={product.id} className='col-md-4'>

      <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Link to={`/api-urunler/${product.id}`}>
        <Card.Title className='text-center'>{product.title}</Card.Title>
        </Link>

        <Card.Text>
          {truncateText(product.description)}
        </Card.Text>
  
      </Card.Body>
      </Card>
      </div>
    
    })}


  </div>

    
    </>
  )
}
