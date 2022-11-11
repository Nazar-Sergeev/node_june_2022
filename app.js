const fs = require('fs/promises');
const path = require('path');

const sorter = async (folder, writeFolder, gender) => {

    try {
        const pathFolder = path.join(__dirname, folder);
        const files = await fs.readdir(pathFolder);

        for (const file of files) {

            const pathFile = path.join(pathFolder, file);
            const data = await fs.readFile(pathFile);
            const user = JSON.parse(data);

            if (user.gender === gender) {
                await fs.rename(pathFile, path.join(__dirname, writeFolder, file));
            }
        }
    } catch (e) {
        console.error(e);
    }
}
sorter('boys', 'girls', 'female');

sorter('girls', 'boys', 'male');


// fs.readdir('./boys', (err, files) => {
//     for (const file of files) {
//         fs.stat(`./boys/${file}`, (err, stats) => {
//            if (stats.isFile()) {
//                 fs.readFile(`./boys/${file}`, (err, data) => {
//                     const peoples = JSON.parse(data);
//                     if (peoples.gender === 'female') {
//                         fs.rename(`./boys/${file}`, `./girls/${file}`, (err) => {
//                             console.log(err);
//                         });
//                     }
//                 });
//             }else {
//                console.log(err);
//            }
//
//         });
//     }
// });
//
// fs.readdir('./girls', (err, files) => {
//     for (const file of files) {
//         fs.stat(`./girls/${file}`, (err, stats) => {
//            if (stats.isFile()) {
//                 fs.readFile(`./girls/${file}`, (err, data) => {
//                     const users = JSON.parse(data);
//                     if (users.gender === 'male') {
//                         fs.rename(`./girls/${file}`, `./boys/${file}`, (err) => {
//                             console.log(err);
//                         });
//                     }
//                 });
//             }else {
//                console.log(err);
//            }
//         });
//     }
// });

