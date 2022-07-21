const Discord = require('discord.js')

module.exports = {
    name: 'contrib',
    execute(message) {
        const embed = new Discord.MessageEmbed()
        .setTitle("**THE FORBIDDEN FOREST**")
            .setDescription("> <:IconDiamondPink:986702449022750730> Tu souhaites contribuer à l'évolution de **The Forbidden Forest** ? \nMerci beaucoup de ton implication pour le serveur. Pour nous aider, tu as plusieurs méthodes : \n\n<a:IconBoost3:986725481753743411> **Contribuer**\n**I**. Inviter du monde & tes amis en cliquant sur [ce lien](https://dsc.gg/tfforest).\n**II**. Laisser un avis du serveur sur [disboard.org](https://disboard.org/fr/server/980907088479916032).\n**III**. Booster notre serveur.\n\nPour la **II**, tu peux ouvrir un ticket une fois que c'est fait. Un beau rôle te sera donné pour te remercier !")
            .setColor("#f47fff")
            .setThumbnail("https://media.discordapp.net/attachments/988112419425509426/999684253942022217/IMG_0316.gif?width=320&height=240")
            
       message.channel.send({embeds: [embed] })
    }
}
