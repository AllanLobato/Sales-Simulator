export const Types = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    SET_PRODUCTS: 'SET_PRODUCTS'
}

export const Actions = {
    getProductsFetch: (payload) => ({
        type: Types.GET_PRODUCTS,
        payload
    }),
    setProductsFetch: (payload) => ({
        type: Types.SET_PRODUCTS,
        payload
    })
}

export default function myProducts(state = { products: [] }, action) {
    // console.log('action', action)
    switch(action.type) {
        case Types.SET_PRODUCTS:
        return { ...state, products: action.payload}
        default:
            return state;
    }
};


// Com o switch & case ele retorna um estado com o array do fetch

