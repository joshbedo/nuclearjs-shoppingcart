/**
 * Mocking API client
 */
'use strict';

var Shop = exports;

var products = require('./products.json');
const TIMEOUT = 100;

Shop.getProducts = function(cb, timeout) {
  timeout = timeout || TIMEOUT;
  setTimeout(function () {
    cb(_products);
  }, timeout);

  // return new Promise(function(resolve, reject) {
  //   request('api/endpoint')
  //     .then
  // });
};

Shop.buyProducts = function(payload, cb, timeout) {
  timeout = timeout || TIMEOUT;
  setTimeout(function () {
    cb();
  }, timeout);
};
