const Discord = require("discord.js");

exports.run = (message) => {

  let botembed = new Discord.RichEmbed()
    .setTitle("~Prambors Radio Discord Bot~")
    .setColor("#ff6100")
    .addField("Invite Link Bot", `[Klik Disini Untuk Mengundangku Ke Servermu](https://discordapp.com/api/oauth2/authorize?client_id=529503736457068564&permissions=8&scope=bot)`)
    .addField("Invite Link Support Server", `[Klik Disini Untuk Join](https://discord.gg/PqPwy34)`);

    return message.channel.send(botembed);
}

  module.exports.help = {
  name: "invite"
}