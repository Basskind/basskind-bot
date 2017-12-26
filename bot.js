const Discord = require('discord.js');
const client = new Discord.Client();
const Prefix = "?";

client.on('ready', () => {
    console.log(`Bot has started.`);
    client.user.setPresence({ game: { name: '?help für Hilfe', type: 0 } });
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'welcome');
    if (!channel) return;
    channel.send(`Willkommen auf dem Discord Server von Basskid TV, ${member}`);
});

client.on('message', msg => {
    if (msg.content === Prefix + 'ping') {
        client.sendMessage(message.author, ":ping_pong: Pong!");
    }
});

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
            },],
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
  .setColor(0x0086AE)
  .setDescription("Ehemaliger Playstation 4 „The Elder Scrolls Online“ Spieler. Dort verbrachte ich wunderschöne Jahre. Im Hinblick auf Teamfähigkeit haben Konsolenspieler (zumindest sehr sehr viele) extreme Egoistische Züge, weshalb es mich wieder zurück zu meiner alten Heimat, dem PC, lockte.")
  .setFooter("© by www.basskid.de")
  .setImage("https://cdn.discordapp.com/attachments/380540227380314114/393023484835397633/mr_kartoffelkopf.png")
  .setThumbnail("https://cdn.discordapp.com/attachments/380540227380314114/392936748067454976/bk_avatar.jpg")
  .setTimestamp()
  .setURL("http://www.basskid.de")
  .addBlankField(true)
  .addField("Mein Rig:", "Intel i7-7700 CPU, 16 GB DDR4 RAM, GeForce GTX 1060 6GB, Logitech G9x Maus, Logitech G15 Tastatur, Roccat Kave 5.1 Headset")
  .addBlankField(true)
  .addField("Homepage", "[www.basskid.de](http://www.basskid.de)", true)
  .addField("Youtube", "[www.youtube.com/channel/UCmk0Zq-LzRkhwIZc3g74QGw](https://www.youtube.com/channel/UCmk0Zq-LzRkhwIZc3g74QGw)", true)
  .addField("Twitter", "[www.twitter.com/Basskid_TV](https://twitter.com/Basskid_TV)", true)
  .addField("Twitch", "[www.twitch.tv/basskidtv](https://www.twitch.tv/basskidtv)", true);  
   msg.channel.send({embed});
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
