const Discord = require("discord.js");

exports.run = (bot, message) => {

  let helpembed = new Discord.RichEmbed()
    .setTitle("~Prambors Radio Jakarta 102.2 FM~")
    .setDescription(`Jadwal Prambors Radio Jakarta`)
    .setColor("#ffb200")
    .addField("<:pramborsdgitm:541983043997401098> Desta & Gina in the morning", `Senin-Jumat [06:00 - 10:00 WIB]`)
    .addField("<:pramborsds:541989558426927124>DJ SHOW", `Senin-Jumat [10:00 - 16:00 WIB]`)
    .addField("<:pramborsst:541985836577849345> Sunset Trip", `Senin-Jumat [16:00 - 20:00 WIB]`)
    .addField("<:pramborsns:541979961553059871> Prambors Night Shift", `Senin-Jumat [20:00 - 00:00 WIB]`)
    .addField("<:pramborswev:541987381096742922> Prambors Weekend Vibez", `Sabtu-Minggu [Seharian]`)
    .setTimestamp()
    .setFooter("Prambors Radio Bot", bot.user.avatarURL);

  message.channel.send(helpembed);
}

  module.exports.help = {
  name: "jadwal"
}