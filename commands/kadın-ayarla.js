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
 if(kadın) return message.channel.send(hataEmbed.setDescription(`Kadın rolü zaten ayarlanmış! Ayarlanan kadın rolü:\`(${kadın.id})\``))

let role = message.mentions.roles.first();
if(!role) return message.channel.send(hataEmbed.setDescription("Bir rol etiketlemeniz gerek! Örnek kullanım: ``` .kadın-ayarla @rol ```"))

database.set(`erkek_${message.guild.id}`, role.id);
message.channel.send(onayEmbed.setDescription(`Başarıyla kadın kayıt rolünü ${role} - \`(${role.id})\` olarak seçtiniz.`))
};

exports.config = {
  name: "kadınayarla",
  guildOnly: true,
  aliases: ["kadın-ayarla"],
};
