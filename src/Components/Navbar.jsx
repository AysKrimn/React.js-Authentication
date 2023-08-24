
import { Link, NavLink } from 'react-router-dom'
import { Yetkilendirme } from '../Context/AuthProvider'
import { useContext } from 'react'


import Dropdown from 'react-bootstrap/Dropdown';



export default function Navbar() {

  const { user } = useContext(Yetkilendirme)

  console.log("navbardaki user:", user)

  // sepet aç kapat
  const handleSidebar = () => {

        const main = document.querySelector('main')
        const sidebar = document.getElementById('sidebar')
        sidebar.classList.toggle('active')
        main.classList.toggle('active')
  }


  return (

    <>
    <nav>

    <ul className='m-0'>

            <li style={{marginRight: "auto"}}>

                <NavLink to="/">
                LOGO
                </NavLink>
               
            </li>

            {
                user !== null ?

                <li>
                    
                        <span onClick={handleSidebar} className='sepet'>
                        Sepet
     
                        </span>
                </li>

                : 
                  null
             }


        

                <li>
                    
                    <NavLink  to="/">
                        /
                    </NavLink>
                </li>


            <li>
                <NavLink to="/api-urunler">
                    Ürünlerimiz
                </NavLink>
            </li>


            <li>
                <NavLink to="/kadromuz">
                    Kadromuz
                </NavLink>
            </li>

            {

                user !== null

                ?
                <>
                 
                 <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {user.name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                user.role === "Admin" 
                                ?
                          
                                    <Dropdown.Item href="/admin">
                                        Admin Sayfası
                                    </Dropdown.Item>
                                : null
                            }
                           
                            <Dropdown.Item href="/cikis">Çıkış Yap</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>

                </>

                :
                <li>
                    <NavLink to="/giris">
                        Giriş Yap
                    </NavLink>
                </li>
            }

            

    </ul>

    </nav>

        { user === null

            ?
                <div className='alert alert-warning' id='infoMsg'>
                    <p>Lütfen sepeti görmek için
                        
                       <Link style={{paddingLeft: "5px"}} to="/giris">
                            giriş yapınız
                       </Link>
                       
                    </p>
                </div>
            : null

        } 
    </>
  )
}
