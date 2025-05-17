// NOTE: https://javascript.info/currying-partials

// function calcBill(price, tax, tip) {
//     return price + price * tax + tip;
// }

// FIXME: Curried Versions...
function calcBill(price) {
    return function(tax) {
        return function(tip) {
            return price + price* tax + tip;
        }
    }
}

console.log( calcBill(100)(10)(5) );



function authorize(role) {
    return function(req, res, next) {
        if (req.user.role != role) {
            return res.status(403).send("Forbidden")
        }
        next();
    };
}


app.get("/admin", authorize("admin"), (req, res)  => {
    res.send(".....Welcome Admin.....");
})