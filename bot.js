const Discord = require('discord.js');
const client = new Discord.Client();
const Prefix = "?"

client.on('ready', () => {
    console.log('I am ready!');
});

client.setGame("GAME");

client.on('message', msg => {
  if (msg.content === Prefix + 'Ping') {
    msg.reply('Pong');
  }
});

client.on('message', msg => {
  if (msg.content === Prefix + 'Creator') {
    msg.reply('My creator is Basskid');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
