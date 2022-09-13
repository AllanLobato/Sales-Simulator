export const Types = {
    CLIENT_REGISTER: 'CLIENT_REGISTER',
    CLIENT_LOGIN: 'CLIENT_LOGIN',
  }

  export const Actions = {
    clientRegister: (payload) => ({
        type: Types.CLIENT_REGISTER,
        payload,
      }),
    clientLogin: (payload) => ({
        type: Types.CLIENT_LOGIN,
        payload,
      }),
    }

    export default function client(state = [], action) {
        console.log('action', action)
        switch (action.type) {
          case Types.CLIENT_LOGIN:
            return [...action.payload];
            default:
              return state;
             }
            };