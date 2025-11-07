const Discord = require('discord.js');
const axios = require('axios');
const cheerio = require('cheerio');
const botconfig = require('../botconfig.json');

const baseURL = `https://api.genius.com/search?access_token=${botconfig.genius}`;

const scrapeLyrics = path => {
  return axios.get(path)
    .then(response => {
      let $ = cheerio.load(response.data);
      return [$('.header_with_cover_art-primary_info-title').text().trim(), $('.lyrics').text().trim()];
    })
    .catch(err => {
      console.warn(err);
    });
};


const searchLyrics = url => {
  return Promise.resolve(axios.get(url, {'Authorization': `Bearer ${botconfig.genius}`})
    .then(response => checkSpotify(response.data.response.hits))
    .then(path => scrapeLyrics(path))
    .catch(err => {
      console.warn(err);
    })
  );
};


const checkSpotify = hits => {
  return hits[0].result.primary_artist.name === 'Spotify' ? hits[1].result.url : hits[0].result.url;
};


exports.run = async function(message, args) {

  if (!args[0]) return message.reply(`Gunakan: ${exports.help.usage}`, {code:'asciidoc'});
 
  const query = args.slice(0).join(" ");
  searchLyrics(`${baseURL}&q=${encodeURIComponent(query)}`).then( async songData  => {

////////////////////// 1 EMBED /////////////////////////////
    if(!songData[1].slice(2048)) {
  
      const em1 = new Discord.RichEmbed()
        .setTitle(`${songData[0]} 🎤`)
        .setDescription(`${songData[1].slice(0, 2047)}`)   
        .setColor(0x00AE86)
        .setFooter(`Direquest Oleh ${message.author.username}`, message.author.avatarURL)
        .setTimestamp();
      message.channel.send(em1)
    
  ////////////////////// 2 EMBED /////////////////////////////
    } else if (songData[1].slice(2048) && !songData[1].slice(4096)) {
  
      const em1 = new Discord.RichEmbed()
        .setTitle(`${songData[0]} 🎤`)
        .setDescription(`${songData[1].slice(0, 2047)}`)   
        .setColor(0x00AE86)
      message.channel.send(em1);

      const em2 = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setDescription(songData[1].slice(2047, 4095))  
        .setFooter(`Direquest Oleh ${message.author.username}`, message.author.avatarURL)
        .setTimestamp();
      return message.channel.send(em2);

  ////////////////////// 3 EMBED /////////////////////////////  
    } else if (songData[1].slice(2048) && songData[1].slice(4096) && !songData[1].slice(6143)) {
    
      const em1 = new Discord.RichEmbed()
        .setTitle(`${songData[0]} 🎤`)
        .setDescription(`${songData[1].slice(0, 2047)}`)   
        .setColor(0x00AE86)
      message.channel.send(em1);
      
      const em2 = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setDescription(songData[1].slice(2047, 4095))  
      message.channel.send(em2);
      
      const em3 = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setDescription(songData[1].slice(4095, 6142))  
        .setFooter(`Direquest Oleh ${message.author.username}`, message.author.avatarURL)
        .setTimestamp();
      return message.channel.send(em3);
  
  ////////////////////// 4 EMBED /////////////////////////////
    } else if (songData[1].slice(2048) && songData[1].slice(4096) && songData[1].slice(6143) && !songData[1].slice(8191)) {
      const em1 = new Discord.RichEmbed()
        .setTitle(`${songData[0]} 🎤`)
        .setDescription(`${songData[1].slice(0, 2047)}`)   
        .setColor(0x00AE86)
      message.channel.send(em1);
      
      const em2 = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setDescription(songData[1].slice(2047, 4095))  
      message.channel.send(em2);
      
      const em3 = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setDescription(songData[1].slice(4095, 6142))
      message.channel.send(em3);
      
      const em4 = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setDescription(songData[1].slice(6142, 8190))
        .setFooter(`Direquest Oleh ${message.author.username}`, message.author.avatarURL)
        .setTimestamp();
      message.channel.send(em4);
    }
  }).catch(err => {
    message.channel.send(`Tidak Bisa Menemukan Lirik Untuk: __${query}__`, {code:'asciidoc'});
    console.warn(err);
  })
};


exports.help = {
  name: 'lirik',
  usage: '*lirik [Judul Musik] [Penyanyi]'
};
