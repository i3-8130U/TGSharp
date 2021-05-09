const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs')
var config = require('./config.json')
var comms = require('./comms')
var emoji = require('node-emoji');
var messages = require('./messages.json')
var token = config.token

const bot = new TelegramBot(token, {polling: true});

function getText(text) {
    return emoji.emojify(text, (name) => {return name})
}

bot.onText(/\/(.+)/, (msg) => {
    var comm = msg.text.trim() + ' '
    var comm_name = comm.slice(0, comm.indexOf(' '))
    var messArr = comm.split(' ')
    console.log(messArr)
    for (comm_count in comms.comms) {
        var comm2 = '/' + comms.comms[comm_count].name
        if (comm2 == comm_name) {
        comms.comms[comm_count].out(bot, msg, messArr)
      }
    }
})

bot.onText(/\/help/, (msg) => {
    if (msg.text == '/help') bot.sendMessage(msg.from.id, getText(messages.commands))
})

bot.onText(/\/help (.+)/, (msg, match) => {
    var comm = match[1];
    for (comm_count in comms.comms) {
        var comm2 = comms.comms[comm_count].name
        if (comm2 == comm) {
            bot.sendMessage(msg.from.id, `${emoji.get('question')} Help for ${comm}:\n ${comms.comms[comm_count].about}`)
        }
      }
})

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.from.id, getText(messages.start))
})