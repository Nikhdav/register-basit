const Discord = require("discord.js");
const database = require("quick.db");



module.exports.run = async (client, message, args) => {
  const kadın = database.fetch(`kadın_${message.guild.id}`)

const yetkili = database.fetch(`yetkili_${message.guild.id}`)

const kayıtsız = database.fetch(`kayıtsız_${message.guild.id}`)


const MessageEmbed = require('discord.js'); 
let hataEmbed = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Bir hata oluştu!");

let onayEmbed = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Komut Başarılı!");

if(!kadın) return message.channel.send(hataEmbed.setDescription(`Daha önce kadın kayıt rolü ayarlanmamış!`))

if(!yetkili) return message.channel.send(hataEmbed.setDescription(`Daha önce yetkili kayıt rolü ayarlanmamış!`))

if(!kayıtsız) return message.channel.send(hataEmbed.setDescription(`Daha önce kayıtsız rolü ayarlanmamış!`))


if(!args[0] || !message.mentions.members.first()) return message.channel.send(hataEmbed.setDescription("Birini etiketlemen gerek! Örnek Kullanım: ```.kadın @Nikhd★v#5944 Anonim 15 ```"))

if(!args[1]) return message.channel.send(hataEmbed.setDescription("Bir yaş belirtmen gerek!"))

let member = message.mentions.members.first();
let kadın1 = message.guild.roles.cache.get(kadın);
let yetkili1 = message.guild.roles.cache.get(yetkili);
let kayıtsız1 = message.guild.roles.cache.get(kayıtsız);


let isim;
if(args[1]) {
isim = args.slice(1).join(' ');

if(!message.member.roles.cache.has(yetkili)) return message.channel.send(hataEmbed.setDescription(`Bu komutu kullanabilmek için ${yetkili1} rolüne sahip olman gerek!`))

if(!member.roles.cache.has(kayıtsız)) return message.channel.send(hataEmbed.setDescription(`Üzerinde kayıtsız - ${kayıtsız} rolü bulunmayan birisini kayıt edemem!`))

let yaş = args[2]



member.roles.add(kadın1.id);
member.roles.remove(kayıtsız1.id);
member.setNickname(isim) 
 message.channel.send(onayEmbed.setDescription(`Başarıyla ${member} - \`(${member.id})\` kullanıcısını kadın olarak kaydettim!`))



}
  
};

exports.config = {
  name: "kadınkayıt",
  guildOnly: true,
  aliases: ["k", "kadın", "woman"],
}; 
