const fs = require('fs')
var child_process = require('child_process')

function run(path) {
    var runScript = `Dim objWshShell, lc\nset objWshShell = WScript.CreateObject("WScript.Shell")\nlc = objWshShell.Run("${path}", 1, false)\nset objWshShell = nothing`
    fs.writeFileSync('run.vbs', runScript)
    child_process.execSync('run.vbs')
    fs.unlinkSync('run.vbs')
}

module.exports.run = run