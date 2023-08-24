import React from 'react'


import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

export default function UserPage(props) {

  console.log("userpage componenti props:", props)


  const erkek_veya_kadin = (string) => {

    let cinsiyet;

    string === "male" ? cinsiyet = "Erkek" : cinsiyet = "Kadın"
    
    return cinsiyet

  }
  const { userDetail } = props

  if (userDetail === null) {

    return <div>
     <p>Bu uygulamada doğrudan kullanıcılara erişemezsiniz lütfen <Link to="/">anasayfaya</Link> gidiniz.</p>

    </div>
  }

  return (
    
    <>

    <h3>{userDetail.name.first} {userDetail.name.last} (#{userDetail.login.uuid})</h3>
    <hr />


    <Row>

    <Col xs={6} md={6}>
    
    <div className='d-flex'>
    <Image src={userDetail.picture.large} roundedCircle />

    <div className='detail-area'>
    <p>Cinsiyet: {erkek_veya_kadin(userDetail.gender)}</p>
    <p>Ülke / Şehir: {userDetail.location.country} - {userDetail.location.city}</p>
    <p>Email: {userDetail.email}</p>
    </div>

   

    </div>
   
    </Col>




    </Row>


    </>
  )
}
