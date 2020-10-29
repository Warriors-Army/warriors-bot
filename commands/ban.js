const { RichEmbed, WebhookClient } = require('discord.js');

module.exports = async (client, msg, args) => {
  const auteur = msg.guild.member(msg.author);
  //const hook = new WebhookClient('742117924810129428', 'NvuAzBfs53G1ZiJhNfprkCWYM9rm2g_1h8piPiJx3sDFc95nHVtMV1R0QYmGutFfq_99');
  if (auteur.hasPermission('BAN_MEMBERS')){

    const user = msg.mentions.users.first();
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        const victime = user.tag;
        args.shift();
        const reason = args.join(" ");
        await member.createDM().then(ch => ch.send(`Vous avez été frappé par le banhammer, asséné part ${msg.author.tag}, pour la raison : "${reason}".\nSi vous vous sentez trop seul vous pouvez rejoindre le Bannistan ( https://discord.gg/65EsTX9 ) vous y serez très bien accueilli :D`)).catch();
        await member.ban(`${msg.author.tag} a banni ${victime} pour la raison : ${reason}`).then(() => {
          msg.channel.send(`${victime} s'est prit un violant coup de banhammer sur la tête de la part de ${msg.author}`);
          const chan = msg.guild.channels.find(ch => ch.id === '653709937276616715');
          chan.send(`${msg.author} a banni ${victime} pour la raison : "${reason}"`);
          /*const embed = new RichEmbed({
            "embeds": [
              {
                "title": "Nouveau banni",
                "color": 1,
                "image": {
                  "url": "https://media.discordapp.net/attachments/664493039410085899/741425878759768064/telechargement.jpg"
                }
              }
            ]
          }).setDescription(`${msg.author.tag} a banni ${victime} pour la raison : "${reason}"`).setAuthor(`${msg.author.tag}`, `${msg.author.avatarURL}`)*/
          //hook.send(embed);
        }).catch(err => {
          msg.channel.send('<@591248680506359828> bouge ton gros cul là, et va voir dans la console c\'est quoi l\'erreur ptn pire dev 🤦‍♂️');
          console.error(err);
        });
      } else {
        msg.reply('J\'le trouve pas sur le serv celui là 🤔');
      }
    } else {
      msg.reply('Faut mentionner quelqu\'un grokon');
    }

  } else {
    msg.reply("att att... takru tavé la perm ? aaaaaah jui mort ! eh les gars ! c'bouffon a cru il pouvait m'utiliser pour ban mdr jpp");
  }

}
