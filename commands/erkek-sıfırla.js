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

let erkek = database.fetch(`erkek_${message.guild.id}`)
if(!erkek) return message.channel.send(hataEmbed.setDescription("Önceden erkek rolü ayarlanmamış. Ayarlamak için: ```.erkek-ayarla @rol```"))

database.delete(`erkek_${message.guild.id}`);
message.channel.send(onayEmbed.setDescription(`Başarıyla erkek kayıt rolünü sıfırladınız.`))
};

exports.config = {
  name: "erkeksıfırla",
  guildOnly: true,
  aliases: ["erkek-sıfırla"],
};
