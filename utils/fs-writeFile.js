const fs = require("fs");


const writeJsonFromFile = (filePath, data) => {
    let promise = new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) console.log(reject(err))
                resolve()
        });
    })
    return promise
}

module.exports.writeJsonFromFile = writeJsonFromFile;
