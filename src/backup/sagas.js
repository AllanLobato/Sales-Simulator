// import { call, put, takeEvery} from 'redux-saga/effects';
// //call faz a chamada da API e put faz a chamada da action
// import { GET_PRODUCTS_FETCH, GET_PRODUCTS_SUCCESS } from '../ducks/actions';
// import {getProducts} from '../../services/apiProductsService';


// function* workGetProductsFetch(){
//     const products = yield call(getProducts); // API function waiting for the call finish
//     yield put({ type: GET_PRODUCTS_SUCCESS, products }) // PUT na action object
// }


// function* mySaga() {
//     yield takeEvery(GET_PRODUCTS_FETCH, workGetProductsFetch);
// }
// //Toda vez que chamar GET_PRODUCTS_FETCH executa a função workGetPRoductsFetch

// export default mySaga;