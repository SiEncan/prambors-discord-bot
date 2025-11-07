const Discord = require("discord.js");

module.exports.run = (bot, message) => {
  let voiceCembed = new Discord.RichEmbed()
    .setColor(`#ff0000`)
    .addField("<:x_:580236714698604545> Gagal Keluar Dari Voice Channel", `Kamu Harus Berada di Dalam Voice Channel.`)
    .setFooter(message.author.tag)
    .setTimestamp()
    .setFooter("Prambors Radio Bot", bot.user.avatarURL);

  if(!message.member.voiceChannel) return message.channel.send(voiceCembed);

  let voicesCembed = new Discord.RichEmbed()
    .setColor(`#ff0000`)
    .addField("<:x_:580236714698604545> Gagal Keluar Dari Voice Channel", `Bot Tidak Dalam Voice Channel`)
    .setFooter(message.author.tag)
    .setTimestamp()
    .setFooter("Prambors Radio Bot", bot.user.avatarURL);

  if(!message.guild.me.voiceChannel) return message.channel.send(voicesCembed);

  let paembed = new Discord.RichEmbed()
    .setColor(`#ff0000`)
    .addField("<:x_:580236714698604545> Gagal Keluar Dari Voice Channel", `Kamu Harus Berada Dalam Voice Channel Yang Sama Dengan Bot.`)
    .setFooter(message.author.tag)
    .setTimestamp()
    .setFooter("Prambors Radio Bot", bot.user.avatarURL);

  if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(paembed);

  message.guild.me.voiceChannel.leave();
  
  let palembed = new Discord.RichEmbed()
    .setColor(`#ff0000`)
    .addField("<:y_:580236715252383765> Berhasil Keluar Dari Voice Channel", `Meninggalkan Voice Channel "**${message.member.voiceChannel.name}**"`)
    .setTimestamp()
    .setFooter("Prambors Radio Bot", bot.user.avatarURL);

  message.channel.send(palembed)

}
  
  module.exports.help = {
  name: "leave"
}
  