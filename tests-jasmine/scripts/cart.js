import {cart , addToCart , saveLocalStorage ,loadFromStorage} from '../../data/cart.js';
describe('Test suite : Testing add to cart functionality .' , () => {
  it('Test case 1 : Already existing product' , () => {
    spyOn(localStorage , 'setItem');
    spyOn(localStorage , 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(cart[0].quantity).toEqual(undefined);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);

  });
  it ('Test case 2 : Adding new producct to the cart ' , () => {
    spyOn(localStorage , 'setItem');
    spyOn(localStorage , 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(cart[0].quantity).toEqual(undefined);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
   
  });
});