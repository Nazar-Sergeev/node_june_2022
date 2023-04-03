const fs = require('fs/promises');
const path = require('path');

const pathFile = path.join(process.cwd(), 'db', 'usersDb.json');

module.exports = {
    reader: async () => {
        const buffer = await fs.readFile(pathFile);
        return JSON.parse(buffer.toString());
    },

    writer: async (users) => {
        return await fs.writeFile(pathFile, JSON.stringify(users));
    },
}