const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {

  let knaladi = args[0]
  if(!knaladi) return message.channel.send(`Katagori Oluşturmam İçin Bir İsim Girmelisin. ${ayarlar.prefix}katagorioluştur <adı>`)
  
  message.guild.createChannel(knaladi, 'category')
  
  message.channel.send(`Başarıyla \`${knaladi}\` adında bir katagori oluşturuldu.`)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kategorioluştur'],
  permLevel: 0
};

exports.help = {
  name: 'kategori-oluştur'
};
