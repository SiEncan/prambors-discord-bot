const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

  let start = Date.now(); message.reply(message.channel.id, 'Pong! ').then(message => {
  let diff = (Date.now() - start);
  let API = (bot.ping).toFixed(2)

  let embed = new Discord.RichEmbed()
    .setColor(`#3366ff`)
    .addField("<a:ping:580238466332491787> Bot Ping", `${diff}ms`, true)
    .setTimestamp()
    .setFooter("Prambors Radio Bot", bot.user.avatarURL)
  message.edit(embed);

  });
  
}

module.exports.help = {
  name: "ping"
}