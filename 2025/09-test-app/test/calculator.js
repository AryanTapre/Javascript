import {expect} from 'chai';
import {add, sub} from '../src/calculator.js';


describe('calculator', () => {
    describe('add', () => {

        before(() => console.log("Testing started- before all tests"))
        after(() => console.log("Testing Finished- after all tests"))

        beforeEach(() => console.log("Before a test – enter a test"));
        afterEach(() => console.log("After a test – exit a test"));

        it('should return sum of two numbers', () => {
            expect( add(3, 5)).to.equal(8);
        })    
    })
    describe('sub', () => {
        it('should return difference of two numbers', () => {
            expect( sub(10, 5)).to.equal(5);
        }) 
    })
}) 
