const Discord = require('discord.js')

module.exports = {
    name: 'rules',
    execute(message) {
        const embed = new Discord.MessageEmbed()
                        .setTitle("**THE FORBIDDEN FOREST**")              
                         .setThumbnail("https://media.discordapp.net/attachments/988112419425509426/999684253942022217/IMG_0316.gif?width=320&height=240")
                        .setColor("#2c2f33")
                        .setDescription(`> Un non-restpect de ces règles entraînera des sanctions. Merci de bien vouloir respecter également les [termes de service](https://discord.com/terms) et les [guidelines](https://discord.com/guideline) de Discord.\n\n **I**. Traitez tout le monde avec respect. Aucun harcèlement, chasse aux sorcières, sexisme, racisme ou discours de haine ne sera toléré.\n\n**II**. Pas de spam ni d'autopromotion (invitations de serveurs, publicités, etc.) sans l'autorisation d'un gérant du serveur, y compris via les MP envoyés aux autres membres.\n\n**III**. Pas de contenu obscène ou soumis à une limite d'âge, qu'il s'agisse de texte, d'images ou de liens mettant en scène de la nudité, du sexe, de l'hyperviolence ou tout autre contenu explicite perturbant.\n\n**IV**. Si tu remarques quelque chose de contraire aux règles ou qui te met dans un sentiment d'insécurité, informe-en les modérateurs. Nous voulons que ce serveur soit accueillant pour tout le monde !`)
       message.channel.send({embeds: [embed] })
    }
}
