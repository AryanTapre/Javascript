// NOTE: https://javascript.info/promise-chaining

function loadJson(url) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: status: ${response.status}`);
        }
        return response.json();
    })
}

function loadGithubUser(users) {
    let githubUsers = [];


    for (const x in users) {
        githubUsers.push(users[x]);
    }

    const fetchPromises = githubUsers.map((user) => {
        return fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json());
    })
    
   return Promise.all(fetchPromises);
}

function showAvatar(githubUser) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (!githubUser)   
                ? reject(new Error("github users does not exists..")) 
                : resolve(githubUser);
        }, 1000)
    });
}


loadJson("http://127.0.0.1:5500/2025/17-promise-async-await/users/index.json")
.then((data) => {
    return loadGithubUser(data);    
    
    
})
.then((user) => {
    let avatars = new Array();

    for (const x of user) {
        avatars.push({
            id: x.id,
            avatar_url: x.avatar_url
        })
    }
    return avatars;
})
.then((avatars) => {
    console.log(avatars);
    
})
.catch(err => console.error("Error while loading JSON:", err));


