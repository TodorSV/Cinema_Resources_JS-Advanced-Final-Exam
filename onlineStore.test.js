let { expect } = require('chai');

let onlineStore = require('./onlineStore');

describe('Tests for Online Store', () => {

    describe('isProductAvailable', () => {
        
        it('If the stockQuantity is less than or equal to 0', () => {
            expect(onlineStore.isProductAvailable('Laptop', 0)).to.equal('Sorry, Laptop is currently out of stock.');
        });

        it('If the stockQuantity is greater than 0, the product is available', () => {
            expect(onlineStore.isProductAvailable('Laptop', 1)).to.equal('Great! Laptop is available for purchase.');
        });

        it('There is a need for validation for the input, the product parameter should be an string, and the stockQuantity  should be a number.', () => {
            expect(() => onlineStore.isProductAvailable(1, 1)).to.throw('Invalid input.');
        });
        
    });

    describe('canAffordProduct', () => {
        // canAffordProduct(productPrice, accountBalance)- A function that accepts two parameters: a number representing the product price and a number representing the account balance.
        it('The function should calculate if the user can afford to buy the product by subtracting the product price from the account balance', () => {
            expect(onlineStore.canAffordProduct(100, 200)).to.equal('Product purchased. Your remaining balance is $100.');
        });
        it('If the result is less than 0', () => {
            expect(onlineStore.canAffordProduct(-1, 100)).to.equal('You don\'t have sufficient funds to buy this product.');
        });
        it('If the result is greater than or equal to 0, the purchase is successful, and the function should return:Product purchased. Your remaining balance is ${remainingBalance}.', () => {
            expect(onlineStore.canAffordProduct(100, 100)).to.equal('Product purchased. Your remaining balance is $0.');
        });
    });

    describe('getRecommendedProducts', () => {

        it('productList array stores objects with product names and categories', () => {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], "Photography")).to.equal('Recommended products in the Photography category: Camera');
        });

        it('If there are no recommended products in the specified category, the function should return: ', () => {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], "Food")).to.equal('Sorry, we currently have no recommended products in the Food category.');
        });
        

        
    });
    
});