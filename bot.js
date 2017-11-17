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
    const embed = new Discord.RichEmbed()
-    .setAuthor('CMS Bot', 'https://cdn.discordapp.com/attachments/380541150156685312/380908831095521290/bk_avatar.jpg')
-
-  .setColor(0x00AE86)
-  .setDescription('This is the description of your embed message')
-  .setFooter('© ClipzZModz', 'https://put a logo link here if you want ')
-  
-  .setTimestamp()
-  .addField('Field1',
-    'Example field1')
-  
-  .addField('Field2',
-    'Example field2')
-  
-  .addField('Field3',
-    'As far as i know you can have alot of fields so feel free to copy the code and place it under this field.');
-  }
-});

// ?ping
client.on('message', msg => {
  if (msg.content === Prefix + 'ping') {
    msg.reply(':ping_pong: Pong!');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
