const crypto = require('crypto');
const { promises } = require('dns');

function derive(password, salt, iterations = 100_000, keylen = 64, digest = 'sha512') {
   return new Promise((resolve, reject) => {
      crypto.pbkdf2(password, salt, iterations, keylen, digest, (error, derivedKey) => {
         if (error) {
            reject(error);
         } else {
            resolve(derivedKey.toString('hex'));
         }
      });
   });  
}

async function run(nTasks = 8) {
   console.log(`Node PID ${process.pid}`);
   console.log(`UV_THREADPOOL_SIZE = ${process.env.UV_THREADPOOL_SIZE || '(default 4)'}`);
   console.time('total');

   // kick off many PBKDF2 tasks in "parallel"
   const tasks = [];
   for (let i = 0; i < nTasks; i++ ){
      const pwd = `password-${i}`;
      const salt = `salt-${i}`;
      tasks.push(derive(pwd, salt));
   }
   const results = await Promise.all(tasks);
   console.timeEnd('total');

   console.log(`Completed ${results.length} pbkdf2 tasks.`);
   console.log(results);
}

run(8).catch(console.error);

