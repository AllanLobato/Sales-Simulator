
export const Types = {
  UPDATE_CART: 'UPDATE_CART',
  CART_REMOVE: 'CART_REMOVE',
  UPDATE_AMOUNT: 'UPDATE_AMOUNT'
}

export const Actions = {
  updateCart: (payload) => ({
      type: Types.UPDATE_CART,
      payload,
    }),
  }

  export default function cart(state = [], action) {
    switch (action.type) {
      case Types.UPDATE_CART:
        return [...action.payload];
        default:
          return state;
         }
        };

