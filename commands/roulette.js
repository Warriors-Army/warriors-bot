module.exports = (client, msg) => {
  var player = msg.member;
  if (player.kickable && !player.roles.find("id", "649718517310029874")) {
    var roll = Math.floor(Math.random() * (client.ROULETTE + 1)) + 1;
    if (roll === 1) {
      (async () => {
        await msg.author.createDM().then(dm => dm.send("Vous avez joué, vous avez perdu :shrug: vous pouvez quand même revenir https://discord.gg/N49Gxsu").catch());
        await player.kick("A perdu à la Roulette Russe").catch(console.error("ther is a problem"));
        await msg.channel.send("Ah! il a perdu :frowning:")
        client.ROULETTE = 5;
      })();
    } else {
      msg.channel.send("C'est pas passé loin :hot_face:");
      client.ROULETTE--;
    }
    console.log(client.ROULETTE + 1);
    console.log(roll);
  } else {
    msg.reply("Je ne peux pas vous kick donc vous ne pouvez pas jouer... désolé Ô grand maître :person_bowing:")
  }
}
