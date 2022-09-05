import { call, put, takeEvery} from 'redux-saga/effects';
//call faz a chamada da API e put faz a chamada da action
import { Types, Actions } from '../ducks/products';
import { getProducts } from '../../services/apiProductsService';


function* workGetProductsFetch(){
    const products = yield call(getProducts); // API function waiting for the call finish
    yield put( Actions.setProductsFetch (products) ) // PUT na action object
}


function* mySaga() {
    yield takeEvery(Types.GET_PRODUCTS, workGetProductsFetch);
}
//Toda vez que chamar GET_PRODUCTS_FETCH executa a função workGetPRoductsFetch

export default mySaga;