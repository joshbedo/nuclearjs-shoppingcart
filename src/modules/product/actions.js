import shop from '../api/shop'
import reactor from '../reactor'
import {
  RECEIVE_PRODUCTS,
  ADD_TOO_CART
} from './actionTypes'

export default {
  fetchProducts() {
    shop.getProducts(products => {
      reactor.dispatch(RECEIVE_PRODUCTS, { products })
    });
  },

  addToCart(product) {
    reactor.dispatch(ADD_TO_CART, { product: product })
  }
}
