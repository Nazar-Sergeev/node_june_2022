const fs = require('fs');

fs.readdir('./boys', (err, files) => {
    for (const file of files) {
        fs.stat(`./boys/${file}`, (err, stats) => {
           if (stats.isFile()) {
                fs.readFile(`./boys/${file}`, (err, data) => {
                    const peoples = JSON.parse(data);
                    if (peoples.gender === 'female') {
                        fs.rename(`./boys/${file}`, `./girls/${file}`, (err) => {
                            console.log(err);
                        });
                    }
                });
            }else {
               console.log(err);
           }

        });
    }
});

fs.readdir('./girls', (err, files) => {
    for (const file of files) {
        fs.stat(`./girls/${file}`, (err, stats) => {
           if (stats.isFile()) {
                fs.readFile(`./girls/${file}`, (err, data) => {
                    const users = JSON.parse(data);
                    console.log(users);
                    if (users.gender === 'male') {
                        fs.rename(`./girls/${file}`, `./boys/${file}`, (err) => {
                            console.log(err);
                        });
                    }
                });
            }else {
               console.log(err);
           }
        });
    }
});

