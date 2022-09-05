import produce from 'immer';

export const Types = {
  CART_ADD: 'CART_ADD',
  CART_REMOVE: 'CART_REMOVE',
  UPDATE_AMOUNT: 'UPDATE_AMOUNT'
}

export const Actions = {
  addToCart: (product) => ({
      type: Types.CART_ADD,
      product,
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
    switch (action.type) {
      case Types.CART_ADD: {
        // return ([...state, action.product]);
        const itemInCart = state.find((item) => item.id === action.product.id);
        if (itemInCart) {
          itemInCart.amount++;
        } else {
          state.push({ ...action.product, amount: 1 });
        }
      }

      case Types.CART_REMOVE:
        return produce(state, draft => {
          const productIndex = draft.findIndex(p => p.id === action.id);
          if (productIndex >= 0) {
            draft.splice(productIndex, 1);
          }
        });
      case Types.UPDATE_AMOUNT: {
        if (action.amount <= 0) {
          return state;
        }
        return produce(state, draft => {
          const productIndex = draft.findIndex(p => p.id === action.id);
          if (productIndex >= 0) {
            draft[productIndex].amount = Number(action.amount);
          }
        });
      }
      default:
        return state;
    }
  }