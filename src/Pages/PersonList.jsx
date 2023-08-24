import React, { useContext, useEffect, useReducer } from 'react'
import { PersonReducer } from '../Reducers/PersonReducer'
import { Yetkilendirme } from '../Context/AuthProvider'

// veritabanından gelen veri
const data = [

    { id: 28, name: "Hakan", role: "Front-end Developer" },
    { id: 21, name: "İrem", role: "UI Developer"},
    { id: 45, name: "Ceren", role: "GUI Developer"}
]

export default function PersonList() {

    const { user } = useContext(Yetkilendirme)
    const [ state, dispatch ] = useReducer(PersonReducer, data)

    // person sil
    const remove_person = (id) => {

        const onayla = window.confirm("Bu kişiyi kadrodan çıkartmak istediğinize emin misiniz?")

        if (onayla) {

            dispatch({ type: "DELETE_PERSONEL", payload: id })
            console.log("AFTER DELETED:", state)
        }
    }

    const add_personel = () => {

        const ad = prompt("Yeni Personelin Adı")
        const rank = prompt("Yeni Personelin Rolü")

        if (ad && rank) {
            
            const userPayload = {

                id: Date.now(),
                name: ad,
                role: rank
            }

            dispatch({ type: "ADD_PERSONEL", payload: userPayload })
        }
    }

    // sayfa yüklendiği zaman state'i devreye sok
    useEffect(() => {

        dispatch({ type: "GET_PERSONEL"})

    }, [])

  
    return (
    <>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime vitae molestiae natus reprehenderit porro magnam fugiat. Sequi vero inventore aut id debitis officia architecto blanditiis accusantium exercitationem beatae.</p>

    <div>

    <div className='d-flex'>

    <h3>Kadromuz</h3>

    {  user && user.role === "Admin"

        ?
            <button onClick={add_personel} className='ms-auto btn btn-success'>+</button>
        : null
    }
    

    </div>
    <hr />

    {state.map(person => {

    return <div className='card mb-3 p-2'>

        <h3>{person.name} Kodu: (#{person.id})</h3>
        <p className='text-start'>{person.role}</p>
        
        { user && user.role === "Admin"
            ?
            <div>
                <button onClick={() => remove_person(person.id)} className='btn btn-link text-danger'>Kadrodan Çıkar</button>
            </div>
            : null
        }
    </div>

    })}


    </div>

    
    </>
  )
}
