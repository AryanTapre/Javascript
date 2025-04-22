import {expect} from 'chai';
import {add, sub} from '../src/calculator.js';

describe('calculator', () => {
    describe('add', () => {
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
