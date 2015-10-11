import { Store, toImmutable } from 'nuclear-js'
import { RECEIVE_PRODUCTS } from '../actionTypes'

export default Store({
  getInitialState() {
    return toImmutable({})
  },

  initialize() {
    this.on(RECEIVE_PRODUCTS, receiveProducts)
  }
})

function receiveProducts(state, { products }) {
  let newProducts = toImmutable(products)
    .toMap()
    .mapKeys((k, v) => v.get('id'))

  return state.merge(newProducts)
}
