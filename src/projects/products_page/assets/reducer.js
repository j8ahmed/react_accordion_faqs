const reducer = (state, action) => {
    const { type, payload } = action
    const { isLoading, current_product, products } = payload

    switch(type){

        case "LOADING":
            return {...state, isLoading: payload.isLoading }

        case "UPDATE_CURRENT_PRODUCT":
            return {...state, isLoading, current_product }

        case "UPDATE_PRODUCT_LIST":
            return {...state, isLoading, products}

        default:
            return state
    }
}


export default reducer