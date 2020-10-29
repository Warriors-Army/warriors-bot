if (msg.content.startsWith(prefix + "setBienvenue")) {
  var mbvn = msg.content.split("setBienvenue ");
  db.get('guild')
    .push({ id: msg.guild.name, bvn: mbvn[1]})
    .write();

  msg.reply(`salon de bienvenue configuré pour ${mbvn[1]}`)
}
