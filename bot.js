const Discord = require('discord.js');
const client = new Discord.Client();
const Prefix = "?"

client.on('ready', () => {
        var opts = {
                name: 'Call of Duty: Black Ops 10',
                url: 'https://www.twitch.tv/lirik',
                type: 1
        };

        client.setStatus(null, opts);
});

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
