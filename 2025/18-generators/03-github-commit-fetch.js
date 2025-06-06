//TODO: FETCH GITHUB USER COMMITS USING GENERATOR FUNCTIONS...

// (async () => {
//     const response = await fetch("https://api.github.com/repositories/969535343/commits?page=3");
//     let nxtPg = response.headers.get('Link');
//     const x = nxtPg.split(";");
//     console.log(x);  
// })();


async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, { // (1)
      headers: {'User-Agent': 'Our script'}, // github needs any user-agent header
    });

    const body = await response.json(); // (2) response is JSON (array of commits)

    // (3) the URL of the next page is in the headers, extract it
    let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
    nextPage = nextPage?.[1];

    url = nextPage;

    for(let commit of body) { // (4) yield commits one by one, until the page ends
      yield commit;
    }
  }
}

(async () => {
    for await (const commit of fetchCommits("AryanTapre/Javascript")) {
        console.log(commit);   
    }
})()