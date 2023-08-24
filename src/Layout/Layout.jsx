import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

// veri sağlayıcı context
import AuthProvider from '../Context/AuthProvider'



export default function Layout(props) {

  const { sepet, setSepet} = props

  // sepetten öğe çıkar
  const removeItem = (urunId) => {

    const onayla = window.confirm("Bu öğeyi sepetten çıkarmak istediğinizee emin misiniz?")

    if (onayla) {

        const removed = sepet.filter(veri => veri.id !== urunId)
        // state güncelle
        setSepet(removed)
    }

  }


  return (
  
    <>
        {/* site nav */}
      
        <AuthProvider>
            
            <div id='sidebar' style={{overflow: "auto"}}>
            {/* sepetteki verileri renderle */}


            {
               sepet.length

               ?

           
                 sepet.map((veri => {

                  return <div style={{marginTop: "5rem"}}>

                  <h3>{veri.title}</h3>
                  <span onClick={() => { return removeItem(veri.id)}} style={{cursor: "pointer", color: "red"}}>Sepetten Çıkar</span>
                  <hr />

                  </div>

                }))


             :
               <div style={{ marginTop: "8rem"}}>
                <img style={{ width: "100%", background: "#cdcdcd"}} src="pop.png" alt="poop" />
               </div>
            }
            </div>

            <Navbar></Navbar>

      
            <main className='container'>

            <Outlet></Outlet>

            </main>


        </AuthProvider>

    </>


  )
}
