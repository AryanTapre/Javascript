let names = [
 'one',
 'two',
 'three',
 'four',
 'five'
];

function sendMeWithDt(value, index, array) {
 console.log(`value: ${value} \n 
  index: ${index} \n
  array: ${array}
 `);
 
}

names.forEach(sendMeWithDt);

