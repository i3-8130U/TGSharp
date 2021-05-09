# TGSharp
TGSharp has VK group (https://vk.com/nodelooper), there you can get help for TGSharp on russian.
Allows you to control computer with Telegram bot. Tested on Windows 10 2004 x64

Disclaimer:
For educational purposes only.

# Installation
First time installation:
1. Download ZIP archive and unpack it
2. Install Node.js (nodejs.org)
3. Create bot with @BotFather
4. Enter bot token into ```config.json```
5. Run ```install.bat```
If error occurs, try to run ```npm install --global --production windows-build-tools```

To run bot run ```run.bat```

# How to use
Type /help to get list of commands. To get help for command, type ```/help [command name without "/"]```.
Also you can browse [commands.md](../commands.md)

# Modules used
| Name                  | Link                                            | Usage                        |
|-----------------------|-------------------------------------------------|------------------------------|
| node-emoji            | https://github.com/omnidan/node-emoji           | Emojis                       |
| node-telegram-bot-api | https://github.com/yagop/node-telegram-bot-api  | Telegram API                 |
| robotjs               | https://github.com/octalmage/robotjs            | Keyboard and mouse emulation |
| screenshot-desktop    | https://github.com/bencevans/screenshot-desktop | Screenshots                  |
| clipboardy            | https://github.com/sindresorhus/clipboardy      | Clipboard manipulations      |
