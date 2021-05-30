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

let kadın = database.fetch(`kadın_${message.guild.id}`)
if(!kadın) return message.channel.send(hataEmbed.setDescription("Önceden kadın rolü ayarlanmamış. Ayarlamak için: ```.kadın-ayarla @rol```"))

database.delete(`kadın_${message.guild.id}`);
message.channel.send(onayEmbed.setDescription(`Başarıyla kadın kayıt rolünü sıfırladınız.`))
};

exports.config = {
  name: "kadınksıfırla",
  guildOnly: true,
  aliases: ["kadın-sıfırla"],
};
