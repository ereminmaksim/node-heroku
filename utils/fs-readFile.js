const fs = require("fs");


const readJsonFromFile = (filePath) => {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, buf) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(buf.toString()))
            }
        })
    })
    return promise

}

module.exports.readJsonFromFile = readJsonFromFile;
