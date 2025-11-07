const config = require('../config.json');
const Discord = require("discord.js");

exports.run = (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
  .setTitle("**~Prambors Radio Discord Bot 📻~**")
  .setDescription(`Bot Ini Akan Aktif 24/7 Di Dalam Voice Channel Jika Tidak Ada Gangguan.`)
  .setColor("#ffb200")
  .addField("!prambors info", `Menampilkan Informasi Tentang Bot Ini.`)
  .addField("!prambors help", `Menampilkan Menu Bantuan Ini.`)
  .addField("!prambors play", `Bot Akan Join Voice Channel Kamu Dan Memulai Streaming Prambors Radio.`)
  .addField("!prambors leave", `Membuat Bot Keluar Dari Voice Channel Kamu.`)
  .addField("!prambors lirik", `Mencari Lirik Suatu Musik.`)
  .addField("!prambors invite", `Memberikan Invite Link Bot Ini.`)
  .addField("!prambors jadwal", `Menampilkan Jadwal Show List Prambors Radio Jakarta`)
  .addField("!prambors ping", `Menampilkan Ping Bot Ini.`)
  .setTimestamp()
  .setFooter("Prambors Radio Bot", bot.user.avatarURL);

  message.channel.send(helpembed);

}

  module.exports.help = {
  name: "help"
}