// bir fonksiyonu modül olarak dışarı çıkart
export const PersonReducer =  (state, action) => {


    console.log("action payload:", action)
    switch(action.type) {

        // tüm verileri döndür
        case "GET_PERSONEL":
        return [...state]

        case "DELETE_PERSONEL":
        return state.filter(personel => personel.id !== action.payload)

        case "ADD_PERSONEL":
        return [...state, action.payload]

        default: 
        return state

    }

    


}