import { createContext, useState } from "react";


export const Yetkilendirme = createContext()

export default function AuthProvider(props) {

  const [user, setUser] = useState(null)

  return (
    
    <Yetkilendirme.Provider value={ { user: user, setUser: setUser } }>

        {props.children}

    </Yetkilendirme.Provider>

  )
}
