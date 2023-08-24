import React, { useContext, useEffect, useState } from 'react'
import { Yetkilendirme } from '../Context/AuthProvider'

import { useNavigate } from 'react-router-dom';

// bs component
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function AnaSayfa(props) {

   const { setUserDetail } = props

   const { user } = useContext(Yetkilendirme)

   console.log("Anasayfadaki contextten gelen veri:", user)
   const [users, setUsers] = useState([])
   const yonlendir = useNavigate()

  useEffect(() => {

      const makeAPIRequest = async () => {

        const request = await fetch('https://randomuser.me/api/?results=20')
        const response = await request.json()
        
        console.log("gelen response:", response)
        // state güncelle
        setUsers(response.results)

      }

      makeAPIRequest()

  }, [])


  // user page componentinte gönderen fonksiyon
  const NavigateToUserPage = (userData) => {

    console.log("[Navigate Fonksiyonu:] tetiklendi:", userData)
    // state at
    setUserDetail(userData)
    // user page gönder
    yonlendir(`/users/${userData.name.first}`)
  }

  // eğer user boşsa
  if (!users.length) {


    return <p>Yükleniyor...</p>
  }

  return (

    <>
    
    <h1>Home</h1>
    <hr></hr>


    {/* getteri maple */}
    <Row>
    {users.map((kullanici => {


     return <Col sm="6" md="4">
     
            <Card style={{ margin: "1rem"}}>
              <Card.Img variant="top" src={kullanici.picture.large} />
              <Card.Body>
                <Card.Title style={{textAlign: "center"}}>{kullanici.name.first} {kullanici.name.last}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

                <div style={{textAlign: "center"}}>
                <Button onClick={() => { return NavigateToUserPage(kullanici)}} variant="primary">Profili Gör</Button>
                </div>
             
              </Card.Body>
          </Card>

      </Col>
    }))}
   

   </Row>

    </>
      

  )
}
