function printUser(userObj) {
    for (const key in userObj) {
       console.log(`${key}: ${userObj[key]}`);
    } 
}

export {
    printUser
}