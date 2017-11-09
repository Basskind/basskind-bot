const Discord = require('discord.js');
const client = new Discord.Client();
const Prefix = "?"

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ game: { name: '?basskind', type: 0 } });
});

client.on('message', msg => {
  if (msg.content === Prefix + 'Ping') {
    msg.reply('Pong');
  }
});

client.on('message', msg => {
  if (msg.content === Prefix + 'basskind') {
    msg.reply('My Daddy is @Basskid#9068');
  }
});
  

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
