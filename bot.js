const Discord = require('discord.js');
const client = new Discord.Client();
const Prefix = "?"

client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setPresence({ game: { name: 'on ${client.guilds.size} servers', type: 0 } });
});

client.on('message', msg => {
  if (msg.content === Prefix + 'Ping') {
    msg.reply('Pong');
  }
});

client.on('message', msg => {
  if (msg.content === Prefix + 'basskind') {
    msg.reply('My Daddy is Basskid. Give him a Dollar');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
