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

let kayıtsız = database.fetch(`kayıtsız_${message.guild.id}`)
if(!kayıtsız) return message.channel.send(hataEmbed.setDescription("Önceden kayıtsız rolü ayarlanmamış. Ayarlamak için: ```.kayıtsız-ayarla @rol```"))

database.delete(`kayıtsız_${message.guild.id}`);
message.channel.send(onayEmbed.setDescription(`Başarıyla kayıtsız rolünü sıfırladınız.`))
};

exports.config = {
  name: "kayıtsızsıfırla",
  guildOnly: true,
  aliases: ["kayıtsız-sıfırla"],
};
