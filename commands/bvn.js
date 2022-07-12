const Discord = require('discord.js')

module.exports = {
    name: 'bvn',
    execute: async (message) => {
        await message.delete();
        let membre = message.mentions.users.first()
        if(!membre) return message.channel.send("Merci de préciser un membre.")
    
        const embed = new Discord.MessageEmbed()
                        .setColor("#2c2f33")
                        .setTitle(`> **${message.author.username}** souhaite la bienvenue à **${membre.username}** ! <a:IconWelcome:986700801634336828>`)
       message.channel.send({embeds: [embed] })
    }
}