import shop from '../api/shop'
import reactor from '../reactor'
import {
  RECEIVE_PRODUCTS,
} from './actionTypes'

export default {
  fetchProducts() {
    shop.getProducts(products => {
      reactor.dispatch(RECEIVE_PRODUCTS, { products })
    });
  }
}
