// NOTE: https://javascript.info/extend-natives

import { profile } from "console";

class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;   
    }
};

const arr = new PowerArray();
arr.push("aryan");
arr.unshift("tapre");

console.log(arr.isEmpty());

console.log(arr.constructor == PowerArray);



class Custom extends Object {

};


//========================= REAL WORLD USE CASES====================

/** USE CASE:
 *      Design a scheme / data-storage facility of PRODUCT for E-commerce store
 * 
 */

class ProductScheme {
    name = null;
    price = null;
    category = null;

    constructor(name, price, category, currency = 'INR') {
        this.name = name;
        this.price = price;
        this.category = category;
        this.currency = currency;
    }
    
    // helper method to format price for display.
    formattedPrice() {
        return `${this.currency} ${this.price}`;
    }
}


class ProductArray extends Array {
    constructor(...args) {
        super(...args);
    }

    totalPrice() {
        return this.reduce((sum, product) => {
            return sum + product.price;
        }, 0)
    }

    filerByCategory(category) {
        return this.filter((product) => {
            if (product.category == category) {
                return new Object(
                    product.name,
                    product.price,
                    product.currency,
                    product.category,
                );
            }
        })
    }
}


const products = new ProductArray(
    new ProductScheme("HP-victus gaming 15", 68000, "laptop"),
    new ProductScheme("red-polo-tshirt", 300, "tshirt")
);


console.log( products.totalPrice() );
console.log(products.filerByCategory("laptop"));



