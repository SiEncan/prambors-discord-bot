bot.setMaxListeners(1000)
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require ("fs");
const bot = new Discord.Client()
const cheerio = require('cheerio');
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
const active = new Map();
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require (`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", () => {
setInterval(()=>{
  let activities = [{text: "!prambors help",type:"listening"},{text: "https://streaming.pramborsfm.com/",type:"streaming",url:"https://www.twitch.tv/PramborsFM"}, {text:`${bot.guilds.reduce((a, b) => a + b.memberCount, 0)} Users 👥`,type:"listening"}, {text:`${bot.guilds.size} Server 🌏`,type:"watching"}, {text:`on https://discord.gg/PqPwy34`,type:"playing"}]
    let random = Math.floor(Math.random()*activities.length)
    if(!activities[random].url) {
    client.user.setActivity(activities[random].text, {type: activities[random].type});
  } else {
    client.user.setActivity(activities[random].text, {type: activities[random].type, url: activities[random].url});
  }
},5000)
});


process.on('unhandledRejection', (reason, promise) => {
    console.error(new Date());
    console.error('Unhandled Rejection at:', reason.stack || reason);
    console.error(reason);
});

bot.on("guildCreate", guild => {
  const a = bot.guilds.get(guild.id);
  let loembed = new Discord.RichEmbed()
    .setTitle("Bot Join Server")
    .addField(`Nama Server`, guild.name)
    .addField(`Jumlah Member`, guild.memberCount)
    .addField(`Owner`, guild.owner.user.tag)
    .addField(`Owner Tag`, guild.owner)
    .setColor("#00ff00")
    .setThumbnail(guild.iconURL)
    .setTimestamp();
  bot.users.get("528216126400888853").send(loembed)
})

bot.on("guildDelete", guild => {
  const a = bot.guilds.get(guild.id);
  let loembed = new Discord.RichEmbed()
    .setTitle("Bot Leave Server")
    .addField(`Nama Server`, guild.name)
    .addField(`Jumlah Member`, guild.memberCount)
    .addField(`Owner`, guild.owner.user.tag)
    .addField(`Owner Tag`, guild.owner)
    .setColor("#ff0000")
    .setThumbnail(guild.iconURL)
    .setTimestamp();
  bot.users.get("528216126400888853").send(loembed)
})
 


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") {
    let loembed = new Discord.RichEmbed()
      .setTitle("DM ke Bot")
      .addField(`Dikirim Oleh:`,`${message.author.tag}`)
      .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL)
      .addField(`Message: `,message.content)
      .setTimestamp();

    bot.users.get("528216126400888853").send(loembed)
    
    message.channel.send("Halo kak, silahkan ketik `!prambors help` untuk melihat semua perintah yang terdapat di bot ini ya..\nuntuk menggunakan perintah `!prambors play` kamu bisa gunakan di server kamu sendiri, bukan di DM bot ini")
  }
  
  if (message.content == "!prambors") {
    return message.channel.send(`Gunakan: **!prambors help** ya kak ${message.author}`);
  }
  

  let prefix = "*";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if(!message.content.startsWith(prefix)) return;
  let commandFile = bot.commands.get(cmd.slice(prefix.length));
  if(commandFile) commandFile.run(bot,message,args,ops);

});

bot.login("BOT TOKEN").catch(console.error);
bot.on('error', (err) => console.error(err));