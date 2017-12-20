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

// ?help (works)
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
      text: "© by www.basskid.de"
    }
  }
});
  }
});

// ?about (works)
client.on('message', msg => {
  if (msg.content === Prefix + 'about') {
const embed = new Discord.RichEmbed()
  .setTitle("Ein paar Worte über mich")
  .setAuthor("Basskid#9068", "https://cdn.discordapp.com/attachments/380540227380314114/392936748067454976/bk_avatar.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x3447003)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 2048 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

  msg.channel.send({embed});
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
