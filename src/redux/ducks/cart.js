import produce from 'immer';

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
  removeFromCart: (id) => ({
      type: Types.CART_REMOVE,
      id,
    }),
  updateAmount: (id, amount) => ({
      type: Types.UPDATE_AMOUNT,
      id,
      amount,
    })
  }

  export default function cart(state = [], action) {
    console.log('action', action)
    switch (action.type) {
      case Types.UPDATE_CART:
        return action.payload;
        default:
          return state;
         }
        }





        // const itemInCart = state.find((item) => item.id === action.product.id);
        // if (itemInCart) {
        //   itemInCart.amount++;
        // } else {
        //   state.push({ ...action.product, amount: 1 });
        // }
      

      // case Types.CART_REMOVE:
      //   return produce(state, draft => {
      //     const productIndex = draft.findIndex(p => p.id === action.id);
      //     if (productIndex >= 0) {
      //       draft.splice(productIndex, 1);
      //     }
      //   });
      // case Types.UPDATE_AMOUNT: {
      //   if (action.amount <= 0) {
      //     return state;
      //   }
      //   return produce(state, draft => {
      //     const productIndex = draft.findIndex(p => p.id === action.id);
      //     if (productIndex >= 0) {
      //       draft[productIndex].amount = Number(action.amount);
      //     }
      //   });
      // }
      // default:
      //   return state;
  //   }
  // }