'use strict';

import React from 'react'

import App from './components/App'
import reactor from './reactor'
import actions from './modules/product/actions'
import CartStore from './modules/cart/CartStore'
import ProductStore from './modules/product/ProductStore'

reactor.registerStores({
  cart: CartStore,
  products: ProductStore,
})

actions.fetchProducts()

React.render(
    React.createElement(App, null),
    document.getElementById('flux-app')
);
