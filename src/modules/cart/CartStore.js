import { Store, toImmutable } from 'nuclear-js'
import { ADD_TO_CART } from '../actionTypes'

export default Store({
  getInitialState() {
    return toImmutable({})
  },

  initialize() {
    this.on(ADD_TO_CART, addToCart)
  }
})

function addToCart(state, { product }) {
  return state.update(product.id, product => {
    const currentInventory = product.get('inventory')
    const newInventory = (currentInventory > 0) ? currentInventory - 1 : 0;
    return product.set('inventory', newInventory);
  })
}
