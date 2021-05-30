const Discord = require("discord.js");  
const database = require("quick.db");


module.exports.run = async (client, message, args) => {
const MessageEmbed = require('discord.js'); 
let hataEmbed = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Bir hata oluştu!");

let onayEmbed = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Komut Başarılı!");

 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(hataEmbed.setDescription("Bu komutu kullanabilmek için ```ADMINISTRATOR``` yetkisine sahip olmanız gerek!"))

let yetkili = database.fetch(`yetkili_${message.guild.id}`)
if(!yetkili) return message.channel.send(hataEmbed.setDescription("Önceden yetkili rolü ayarlanmamış. Ayarlamak için: ```.yetkili-ayarla @rol"))

database.delete(`yetkili_${message.guild.id}`);
message.channel.send(onayEmbed.setDescription(`Başarıyla kayıt yetklisi rolünü sıfırladınız.`))
};

exports.config = {
  name: "yetkilisıfırla",
  guildOnly: true,
  aliases: ["yetkili-sıfırla"],
};
