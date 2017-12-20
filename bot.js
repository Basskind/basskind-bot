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
  channel.send(`Willkommen auf dem Discord Server von Basskid TV, ${member}`);
});

// ?ping (works)
client.on('message', msg => {
  if (msg.content === Prefix + 'ping') {
    msg.reply(':ping_pong: Pong!');
  }
});

// ?test (works)
client.on('message', msg => {
  if (msg.content === Prefix + 'help') {
    msg.channel.send({embed: {
  color: 3447003,
  author: {
      name: 'Basskid#9068',
      icon_url: 'https://cdn.discordapp.com/attachments/380540227380314114/392936748067454976/bk_avatar.jpg'
    },
    title: "Basskind Discord Bot v0.2",
    url: "http://www.basskid.de",
    description: "Der Discord Bot für die bekloppten.",
    fields: [{
        name: "?help",
        value: "Allgemeiner Hilfe Befehl."
      },
      {
        name: "?about",
        value: "Ein bisschen Werbung für den kleinen [Basskid](http://www.basskid.de)."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© by www.basskid.de)"
    }
  }
});
  }
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
