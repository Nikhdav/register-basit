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
 if(yetkili) return message.channel.send(hataEmbed.setDescription(`Yetkili rolü zaten ayarlanmış! Ayarlanan yetkili rolü:\`(${yetkili.id})\``))

let role = message.mentions.roles.first();
if(!role) return message.channel.send(hataEmbed.setDescription("Bir rol etiketlemeniz gerek! Örnek kullanım: ``` .yetkili-ayarla @rol ```"))

database.set(`yetkili_${message.guild.id}`, role.id);
message.channel.send(onayEmbed.setDescription(`Başarıyla yetkili kayıt rolünü ${role} - \`(${role.id})\` olarak seçtiniz.`))
};

exports.config = {
  name: "yetkiliayarla",
  guildOnly: true,
  aliases: ["yetkili-ayarla"],
};
