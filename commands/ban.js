const Discord = require("discord.js");

module.exports = {
    name: "ban",
    description: "Ban un membre.",

    execute: async (message, args) => {
        await message.delete();
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS)) { 
            return message.channel.send("You don't have the necessary permissions.");
        }

        try {
            const user = await message.guild.members.fetch(
                message.mentions.users.first() // On récupère le premier utilisateur mentionné.
                || message.guild.members.cache.get(args[0]) // Sinon on regarde si l'ID est valide.
            );

            const banReason = args.join(" ").slice(22);
            const banEmbed = new Discord.MessageEmbed()
                .setTitle("Vous venez de vous faire bannir ! <:03RedButton:904149185350225921>")
                .setDescription(`Vous avez été banni de ${message.guild.name}.`)
                .setColor("#ff0000");

            if (!banReason) {
                banEmbed.setDescription(`Vous avez été banni de ${message.guild.name} pour raison une raison inconnue.\nLa personne qui vous a banni(e) est ${message.author.username}`);
            }
            else {
                banEmbed.setDescription(`Vous avez été banni de ${message.guild.name} pour "${banReason}".\nLa personne qui vous a banni(e) est ${message.author.username}`);
            }

            if (user.bannable) {
                await user.ban({ reason: banReason });

                // Envoie d'un message de confirmation.
                const banConfirmedEmbed = new Discord.MessageEmbed()
                    .setColor("#ff0000")
                    .setDescription(`Member `+ args[0] +` has been **banned**. \n> Reason : **${banReason ? banReason : "Unknown."}**`)
                    .setFooter("Permanent banishment");

                const sendedEmbed = await message.channel.send({ embeds: [banConfirmedEmbed] });
                await sendedEmbed.react(" <:moderation:949422295993184356>");
            }
            else {
                const failedEmbed = new Discord.MessageEmbed()
                    .setColor("#ff0000")
                    .setTitle("Error ! ")
                    .setDescription("I can't ban this user.")

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