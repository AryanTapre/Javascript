// NOTE: Destructuring Array...

let arr = ["Elon", "Musk", "Little-x", "Kimble Musk"];

let [one, two, three, four] = arr;
console.log(one + two + three + four);

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(rest);

let [name="tapre", surname="aryan"] = ["Aryant"];
console.log(name);
console.log(surname);




// NOTE: Destructuring Objects...

let book = {
    ["book-name"]: "Elon musk by walter Issacson",
    price: "300$",
    author: "Walter Isaacson",
    editon: 5
};

let { "book-name":bookname, price, author, editon } =  book;

let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["cake", "donut"],
    extra: false
};

let {
    size: {
        height,
        width
    },
    extra,
    items: [item1, item2]
} = options;

console.log(height);
console.log(extra);
console.log(item1);



function showBook({"book-name":bookname, author, editon, price, firstLaunch="2015-07-24"}) {
    console.log(`${bookname}, ${author}, ${editon}, ${price}, ${firstLaunch}`);    
}

showBook(book);