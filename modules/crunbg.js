const fs = require('fs')
const child_process = require('child_process')

function runbg(path) {
    var runScript = `Dim objWshShell, lc\nset objWshShell = WScript.CreateObject("WScript.Shell")\nlc = objWshShell.Run("${path}", 0, false)\nset objWshShell = nothing`
    fs.writeFileSync('runbg.vbs', runScript)
    child_process.execSync('runbg.vbs')
    fs.unlinkSync('runbg.vbs')
}

module.exports.runbg = runbg