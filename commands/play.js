const Discord = require("discord.js");
const ffmpeg = require("ffmpeg");
const opusscript = require("opusscript");

module.exports.run = async (bot, message, args) =>{

  const streamURL = `http://masima.rastream.com/masima-pramborsjakarta?`;

  let userVoiceChannel = message.member.voiceChannel;
  let botVoiceConnection = message.guild.me.voiceChannel;

  if (!userVoiceChannel) {
  
  let eEmbed = new Discord.RichEmbed()
    .setColor("#FFFF00")
    .addField(`<:x_:580236714698604545> Gagal Memulai Siaran`,` ${message.author} Kamu Harus Berada Di Dalam Voice Channel,\n Jika Kamu Sudah Berada Di Dalam Voice Channel Coba Untuk Keluar Lalu Masuk Kembali Ke Dalam Voice Channel.`)
    .setTimestamp()
    .setFooter("Prambors Radio Jakarta", bot.user.avatarURL);

  message.channel.send(eEmbed);
      
  } else if (userVoiceChannel && userVoiceChannel !== botVoiceConnection) {

    userVoiceChannel.join()
      .then(connection => {
      let sEmbed = new Discord.RichEmbed()
        .setColor("#FFFF00")
        .addField(`Selamat Mendengarkan Prambors Radio Jakarta!!`,`Jika ada iklan, mohon tunggu iklannya habis ya <:mm:580236714895736842>`)
        .setTimestamp()
        .setFooter("Prambors Radio Jakarta", bot.user.avatarURL);

      message.channel.send(sEmbed);
      connection.playArbitraryInput(streamURL);
    }).catch(console.log);

  } else if (userVoiceChannel && userVoiceChannel === botVoiceConnection) {

    userVoiceChannel.leave()
    setTimeout(() => {
      userVoiceChannel.join()
        .then(connection => {
          let sEmbed = new Discord.RichEmbed()
            .setColor("#FFFF00")
            .addField(`Selamat Mendengarkan Prambors Radio Jakarta!!`,`Jika ada iklan, mohon tunggu iklannya habis ya <:mm:580236714895736842>`)
            .setTimestamp()
            .setFooter("Prambors Radio Jakarta", bot.user.avatarURL);

          message.channel.send(sEmbed);
          connection.playArbitraryInput(streamURL);
        }).catch(console.log);
        
    }, 2000)
  }
}

module.exports.help = {
  name: "play"
}