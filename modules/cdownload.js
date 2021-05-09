const http = require('http')
const fs = require('fs')

function download(path, filename) {
    path = path.replace('https://', 'http://')
    const file = fs.createWriteStream(filename)
    http.get(path + '/' + filename, (response) => {
        response.pipe(file)
    })
    return true
}

module.exports.download = download