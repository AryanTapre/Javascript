let urls = [
  'https://api.github.com/users/hkirat',
  'https://api.github.com/users/AryanTapre',
  'https://no-such-url'
];


const passby = urls.map(url => fetch(url));

Promise.allSettled(passby)
  .then(results => { // (*)

    console.log("gola => ");
    console.log(results);
    
    

    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        console.log(`${urls[num]}: ${result}`);
      }
      if (result.status == "rejected") {
        console.log(`${urls[num]}: ${result.reason}`);
      }
    });
  });




