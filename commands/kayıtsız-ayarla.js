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
 if(kayıtsız) return message.channel.send(hataEmbed.setDescription(`Kayıtsız rolü zaten ayarlanmış! Ayarlanan kayıtsız rolü:\`(${kayıtsız.id})\``))

let role = message.mentions.roles.first();
if(!role) return message.channel.send(hataEmbed.setDescription("Bir rol etiketlemeniz gerek! Örnek kullanım: ``` .kayıtsız-ayarla @rol ```"))

database.set(`kayıtsız_${message.guild.id}`, role.id);
message.channel.send(onayEmbed.setDescription(`Başarıyla kayıtsız rolünü ${role} - \`(${role.id})\` olarak seçtiniz.`))
};

exports.config = {
  name: "kayıtsızayarla",
  guildOnly: true,
  aliases: ["kayıtsız-ayarla"],
};
