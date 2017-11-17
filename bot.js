const Discord = require('discord.js');
const client = new Discord.Client();
const Prefix = "?";

client.on('ready', () => {
    console.log(`Bot has started.`);
    client.user.setPresence({ game: { name: '?help für Hilfe', type: 0 } });
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

// ?help
client.on('message', msg => {
  if (msg.content === Prefix + 'help') {
    const ce = require("embed-creator");
 
msg.channel.send(ce(
  "#FEAFEA", {"name": "Fire", "icon_url": msg.author.displayAvatarURL(), "url": "https://www.google.com"}, "Title", "Description",
  [{"name": "Field 1", "value": "Value 1"}, 
   {"name": "Field 2", "value": "Value 2"}],
  {"text": "This is footer text!", "icon_url": msg.guild.iconURL()}, 
  {"thumbnail": msg.guild.iconURL(), "image": msg.author.displayAvatarURL()}, false
));
}
});

// ?ping
client.on('message', msg => {
  if (msg.content === Prefix + 'ping') {
    msg.reply(':ping_pong: Pong!');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
