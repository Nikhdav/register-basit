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
 if(erkek) return message.channel.send(hataEmbed.setDescription(`Erkek rolü zaten ayarlanmış! Ayarlanan erkek rolü:\`(${erkek.id})\``))

let role = message.mentions.roles.first();
if(!role) return message.channel.send(hataEmbed.setDescription("Bir rol etiketlemeniz gerek! Örnek kullanım: ``` .erkek-ayarla @rol ```"))

database.set(`erkek_${message.guild.id}`, role.id);
message.channel.send(onayEmbed.setDescription(`Başarıyla erkek kayıt rolünü ${role} - \`(${role.id})\` olarak seçtiniz.`))
};

exports.config = {
  name: "erkekayarla",
  guildOnly: true,
  aliases: ["erkek-ayarla"],
};
