let Aryan = Object.create(null);

Aryan[Symbol.toPrimitive] = function(hint) {
  if (hint === "string") return "Aryan as String";
  if (hint === "number") return 100;
  return "Aryan" 
}

//alert(Aryan);

export default Aryan


