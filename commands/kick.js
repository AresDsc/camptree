const Discord = require("discord.js");

module.exports = {
    name: "kick",
    description: "Kick un membre.",

    execute: async (message, args) => {
        await message.delete();
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.KICK_MEMBERS)) { 
            return message.channel.send("You don't have the necessary permissions.");
        }

        try {
            const user = await message.guild.members.fetch(
                message.mentions.users.first() // On récupère le premier utilisateur mentionné.
                || message.guild.members.cache.get(args[0]) // Sinon on regarde si l'ID est valide.
            );

            const kickReason = args.join(" ").slice(22);
            const kickEmbed = new Discord.MessageEmbed()
                .setTitle("Vous venez de vous faire expulser ! <:03OrangeButton:904149302589390869>")
                .setDescription(`Vous avez été expulsé de ${message.guild.name}.`)
                .setColor("#c27c0e");

            if (!kickReason) {
                kickEmbed.setDescription(`Vous avez été expulsé de ${message.guild.name} pour raison une raison inconnue.\nLa personne qui vous a expulsé(e) est ${message.author.username}`);
            }
            else {
                kickEmbed.setDescription(`Vous avez été expulsé de ${message.guild.name} pour "${kickReason}".\nLa personne qui vous a expulsé(e) est ${message.author.username}`);
            }

            if (user.kickable) {
                await user.kick({ reason: kickReason });

                // Envoie d'un message de confirmation.
                const kickConfirmedEmbed = new Discord.MessageEmbed()
                .setColor("f3e803")
                .setDescription(`Member ` + args[0] +` has been **kicked**. \n> Reason : **${kickReason ? kickReason : "Unknown."}**`)
                .setFooter("Expulsion");

                const sendedEmbed = await message.channel.send({ embeds: [kickConfirmedEmbed] });
                await sendedEmbed.react("💥");
            }
            else {
                const failedEmbed = new Discord.MessageEmbed()
                    .setColor("#ff0000")
                    .setTitle("Error ! ")
                    .setDescription("I can't kick this user.")

                const sendedEmbed = await message.channel.send({ embeds: [failedEmbed] });
                await sendedEmbed.react("😥");
            }
        }
        catch (e) {
            console.error(e); // Debug

            const failedEmbed = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("Error ! ")
                .setDescription("User not found !");

            await message.channel.send({ embeds: [failedEmbed] });
        }
    }
};