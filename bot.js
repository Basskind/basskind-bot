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
  .setColor(0x0086AE)
  .setDescription("Ehemaliger Playstation 4 „The Elder Scrolls Online“ Spieler. Dort verbrachte ich wunderschöne Jahre. Im Hinblick auf Teamfähigkeit haben Konsolenspieler (zumindest sehr sehr viele) extreme Egoistische Züge, weshalb es mich wieder zurück zu meiner alten Heimat, dem PC, lockte.")
  .setFooter("© by www.basskid.de")
  .setImage("https://cdn.discordapp.com/attachments/380540227380314114/393023484835397633/mr_kartoffelkopf.png")
  .setThumbnail("https://cdn.discordapp.com/attachments/380540227380314114/392936748067454976/bk_avatar.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("http://www.basskid.de")
  .addBlankField(true)
  .addField("Mein Rig:",
    "Intel i7-7700 CPU, 16 GB DDR4 RAM, GeForce GTX 1060 6GB, Logitech G9x Maus, Logitech G15 Tastatur, Roccat Kave 5.1 Headset")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addBlankField(true)
  .addField("Homepage", "[www.basskid.de](http://www.basskid.de)", true)
  .addField("Twitch", "[www.twitch.tv/basskidtv](https://www.twitch.tv/basskidtv)", true);  
    msg.channel.send({embed});
      }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
