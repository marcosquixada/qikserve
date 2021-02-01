import api from '../../services/api';
import { listProducts } from '../ducks/products';

export const fetchProducts = () => {
    return dispatch => {
        api.get('/products')
        .then((res)=>{
            dispatch(listProducts(res.data))
        })
        .catch(console.log)
    }
}