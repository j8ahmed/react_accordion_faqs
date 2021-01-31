export const reducer = (state, action) => {
    const { type, payload } = action
    switch(type){

        case "TEST":
            return {...state, test: "Test ran succesfully"}

        case "REMOVE ITEM":
            return {...state, items:payload.items}

        case "CHANGE ITEM QUANTITY":
            return {...state, items: payload.items }

        case "REMOVE ALL ITEMS":
            return {...state, items: [] }

        default:
            return state
    }



}