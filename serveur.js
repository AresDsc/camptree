const Discord = require('discord.js')

module.exports = {
    name: 'serveur',
    execute(message) {
        const embed = new Discord.MessageEmbed()
        .setTitle("**THE FORBIDDEN FOREST**")
            .setDescription("> <:IconDiamondGreen:986702405653659690> Qu'est-ce que **The Forbidden Forest** ? \nC'et un serveur communautaire axé sur la bienveillance. Nous possédons nos propres emotes, nos propres bots ainsi qu'un staff mature et une communauté active !\n➜ [Inviter du monde sur The Forbidden Forest](https://dsc.gg/tfforest)\n\n<:EmoteCompass:986722109361377301> **Serveur**\nNom ➜ TheForbiddenForest\nIdentifiant ➜ 980907088479916032\nDescription ➜ Découvre une communauté agréable et bienveillante !\nCommunauté ➜ Activée\nPropriétaire ➜ Δres#9999\nIdentifiant ➜ 836578525594779669\nModération ➜ Moyenne\n<:EmoteWen:986722013777387540> **Chiffres**\nMembres ➜ ${message.guild.memberCount}\nRôles ➜ 72 ")
            .setColor("#2ef7a1")
            .setThumbnail("https://media.discordapp.net/attachments/988112419425509426/999684253942022217/IMG_0316.gif?width=320&height=240")
            
       message.channel.send({embeds: [embed] })
    }
}