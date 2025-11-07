const Discord = require("discord.js");

exports.run = (bot, message, args) => {

  let hours = Math.floor(bot.uptime / 3600000) % 24;
  let minutes = Math.floor(bot.uptime / 60000) % 60;
  let seconds = Math.floor(bot.uptime / 1000) % 60;
	  

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setDescription("**~Prambors Radio Discord Bot  :radio:  ~**")
    .setColor("#ff6100")
    .setThumbnail(bicon)
    .addField("Jumlah Server", `${bot.guilds.size} Server 🌏`)
    .addField("Jumlah Pengguna", `${bot.guilds.reduce((a, b) => a + b.memberCount, 0)} Users 👥`)
    .addField("Dibuat Oleh", `Evos Roar#5310`)
    .addField("Dibuat Pada Tanggal", `Jumat, 28 Desember 2018`)
    .addField("Uptime", `${hours} Jam ${minutes} Menit ${seconds} Detik`)
    .addField("Support Server", `[Klik Disini Untuk Join](https://discord.gg/PqPwy34)`)
    .setFooter(`Bot Ini Sedang Aktif di ${bot.voiceConnections.size} Voice Channels 🔊`);
  return message.channel.send(botembed);
}
  module.exports.help = {
  name: "info"
}