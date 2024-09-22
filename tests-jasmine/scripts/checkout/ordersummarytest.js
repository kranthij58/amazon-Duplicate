import { renderOrderSummary } from "../../../scripts/checkout/ordersummary.js";

import {loadFromStorage ,cart } from '../../../data/cart.js';

 describe('test suite : render order summary' , () => {

  beforeEach(() => {

    document.querySelector('.js-test-container').innerHTML = `
   <div class = 'total-cart-checkout' ></div>
    <div class = 'js-order-summary' ></div>
    <div class = "payment-summary"></div>
    
    `;
    spyOn(localStorage , 'setItem');
    spyOn(localStorage , 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6" ,
        quantity: 2,
        deliveryOptionId : '1',
      },
      {
        productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d" ,
        quantity: 1,
        deliveryOptionId : '2' ,
      }]);
    });
    loadFromStorage();

    renderOrderSummary();

  });
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML = ``;
  });
  
  it('test case : display order summary' , () => {
   
   expect(document.querySelectorAll('.js-item-container').length).toEqual(2);

   

  });
  
  it('test case : removes a product' , () => {

    document.querySelector(`.js-delete-link-${productId1}`).click();

    expect(document.querySelectorAll('.js-item-container').length).toEqual(1);

    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
  ).toEqual(null);
  expect(
    document.querySelector(`.js-cart-item-container-${productId2}`)
  ).not.toEqual(null);

  expect(cart.length).toEqual(1);
  expect(cart[0].productId).toEqual(`${productId2}`);

 

  });
 
  

 });