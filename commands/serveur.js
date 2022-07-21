const Discord = require('discord.js')

module.exports = {
    name: 'serveur',
    execute(message) {
        const embed = new Discord.MessageEmbed()
        .setTitle("**THE FORBIDDEN FOREST**")
            .setDescription("> <:IconDiamondGreen:986702405653659690> Qu'est-ce que **The Forbidden Forest** ? \nC'est un serveur communautaire axé sur la bienveillance. Nous possédons nos propres emotes, nos propres bots ainsi qu'un staff mature et une communauté active !\n➜ [Inviter du monde sur The Forbidden Forest](https://dsc.gg/tfforest)\n\n<:EmoteCompass:986722109361377301> **Serveur**\nNom [➜](https://dsc.gg/tfforest) `TheForbiddenForest`\nIdentifiant [➜](https://dsc.gg/tfforest) `980907088479916032`\nDescription [➜](https://dsc.gg/tfforest) `Découvre une communauté agréable et bienveillante` !\nCommunauté [➜](https://dsc.gg/tfforest) `Activée`\nPropriétaire [➜](https://dsc.gg/tfforest) `Δres#9999`\nIdentifiant [➜](https://dsc.gg/tfforest) `836578525594779669`\nModération [➜](https://dsc.gg/tfforest) `Moyenne`\n<:EmoteWen:986722013777387540> **Chiffres**\nMembres [➜](https://dsc.gg/tfforest) `- de 200` \nRôles [➜](https://dsc.gg/tfforest) `72` ")
            .setColor("#2ef7a1")
            .setThumbnail("https://media.discordapp.net/attachments/988112419425509426/999684253942022217/IMG_0316.gif?width=320&height=240")
            
       message.channel.send({embeds: [embed] })
    }
}
