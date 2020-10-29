const { RichEmbed } = require('discord.js');

module.exports = (client, msg) => {
  var roles = 0;
  msg.guild.roles.forEach(owo => {
    roles++;
  });

  var haut = msg.guild.owner.highestRole;
  var chan = 0;
  var cat = 0;
  var txt = 0;
  var voc = 0;
  msg.guild.channels.forEach(owo => {
    chan++;
    if (owo.type === "category") {
      cat++;
    }else if (owo.type === "voice") {
      voc++;
    }else {
      txt++;
    }
  });

  var hum = 0;
  var bot = 0;
  msg.guild.members.forEach(mbr => {
    if (mbr.user.bot) {
      bot++;
    }else {
      hum++;
    }
  });

  var dateF = require('../fonctions/date.js')(msg.guild.createdAt);

  var servEmbed = new RichEmbed().setTitle(`INFO SUR LE SERV **${msg.guild.name}**`)
    .setColor("#000001")
    .setFooter(`Serveur ID : ${msg.guild.id} | ${client.MARQUE}`, client.THUMB)
    .setThumbnail(msg.guild.iconURL)
    .addField("Owner", msg.guild.owner, true)
    .addField("Date de création", dateF, true)
    .addField("Nombre de rôles", `${roles}`, true)
    .addField("Plus haut grade", `${haut}`, true)
    .addField("Nombre de membres", `Total : ${msg.guild.memberCount},\nHumains : ${hum}; Bots : ${bot}`, true)
    .addField("Nombre de salons", `Total : ${chan},\nCatégories : ${cat}\nTextuels : ${txt}; Vocals : ${voc}`, true)

  var roleW = "";
  msg.guild.roles.forEach(rl => {
    if (rl.name === "Warriors 💪"){
      var roleN = 0;
      rl.members.forEach(owo => roleN++);
      servEmbed.addField("Nombre de Warriors", roleN, true);
    }
  });

  msg.channel.sendEmbed(servEmbed);
  //console.log(msg.guild.channels);
}
