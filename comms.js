const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs')
var ctype = require('./modules/ctype')
var ctypef = require('./modules/ctypef')
var cmove = require('./modules/cmove')
var crun = require('./modules/crun')
var crunbg = require('./modules/crunbg')
var cdownload = require('./modules/cdownload')
const screenshot = require('screenshot-desktop')
var emoji = require('node-emoji');
var messages = require('./messages.json');
const { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } = require('constants');

function getText(text) {
    return emoji.emojify(text, (name) => {return name})
}

function type(bot, msg, args) {
    args = msg.text.split(' ');
    args.shift();
    args = args.join(' ');

    ctype.type(args)

    bot.sendMessage(msg.from.id, getText(messages.executed))
}

function typef(bot, msg, args) {
    args = msg.text.split(' ');
    args.shift();
    args = args.join(' ');

    ctypef.typef(args)

    bot.sendMessage(msg.from.id, getText(messages.executed))
}

function move(bot, msg, args) {
    cmove.move(args[1], args[2])
    bot.sendMessage(msg.from.id, getText(messages.executed))
}

function takeScreenshot(bot, msg, args) {
    screenshot({filename: 'shot.png' }).then((imgPath) => {
        bot.sendPhoto(msg.from.id, fs.createReadStream(imgPath))
    })
    bot.sendMessage(msg.from.id, getText(messages.executed))
}

function run(bot, msg, args) {
    crun.run(args[1])
    bot.sendMessage(msg.from.id, getText(messages.executed))
}

function runbg(bot, msg, args) {
    crunbg.runbg(args[1])
    bot.sendMessage(msg.from.id, getText(messages.executed))
}

function download(bot, msg, args) {
    if (!cdownload.download(args[1], args[2])) {
        bot.sendMessage(msg.from.id, getText(messages.somethingWrong))
        return
    }
    bot.sendMessage(msg.from.id, getText(messages.executed) + '\nFile saved as ' + args[2])
}

var comms = [{
    name: 'type',
    out: type,
    about: 'Type text. Usage: /type [text]'
},
{
    name: 'typef',
    out: typef,
    about: 'Instantly type text. Uses clipboard. Usage: /typef [text]'
},
{
    name: 'move',
    out: move,
    about: 'Move mouse cursor. Usage: /move [x] [y]'
},
{
    name: 'screenshot',
    out: takeScreenshot,
    about: 'Get screenshot. Usage: /screenshot [no args needeed]'
},
{
    name: 'run',
    out: run,
    about: 'Run program. Usage: /run [path/name]'
},
{
    name: 'runbg',
    out: runbg,
    about: 'Run program in background. Usage: /runbg [path/name]'
},
{
    name: 'download',
    out: download,
    about: 'Download file. Usage: /download [url including directory] [filename]'
}];

module.exports.comms = comms;