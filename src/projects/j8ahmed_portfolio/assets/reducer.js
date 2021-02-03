
const reducer = (state, action) => {
    const { type } = action

    switch(type){

        case "TEST":
            return {...state, test:"The test ran successfully!"}
            
        default:
            return state
    }

}

export default reducer