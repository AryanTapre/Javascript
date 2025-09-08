// describe("pow",function () {
//     it("raises to n-th power", function () {
//         assert.equal( pow(2,3), 8)
//     })
// })

describe("pow", function() {
    function generateTestCases(x) {

        it("for negative n the result is NaN", function() {
            assert.isNaN( pow(x, -1));
        })

        it("for non-integer n the result is NaN", function() {
            assert.isNaN( pow(x, 1.5));
        })

        let expected = x * x * x;
        it(`${x} raise to power 3 is ${expected}`, function() {
            assert.equal( pow(x, 3), expected);
        })
        
    }
    
    for (let x = 1; x < 5; x++) {
        generateTestCases(x);
    }
});

str