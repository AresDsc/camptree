const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [32767] });
const fs = require('fs')
const Discord = require("discord.js")
const clientconfig = require('./config.json');
const { executionAsyncResource } = require('async_hooks');

  
client.commands = new Discord.Collection()

client.on('ready', () => {
client.user.setActivity("Discordia", {type: 'PLAYING' })
})

require("dotenv").config();
client.on("guildMemberAdd", (member) => {
    let guild = client.guilds.cache.get("980907088479916032");
    let channel = client.channels.cache.get("986597792006959124");

    if (guild != member.guild) {
        return console.log('Un nouveaux membre est arrivé !')
    }else {

        channel.send({content: `<@!${member.id}>`})
        
    const embed  = new Discord.MessageEmbed()
    .setAuthor(member.user.tag + " est apparu ici")
    .setColor('#5865f2')
    .setDescription(`> <a:welcome:986611729393930241> Souhaitez lui la bienvenue dans **Discordia**`);

channel.send({embeds: [embed] })
    }
})



const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.on("messageCreate", async (message) => {
    if(!message.content.startsWith(clientconfig.prefix)) return;

    var args = message.content.slice(clientconfig.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send("Une erreur s'est produite lors de l'exécution de la commande.")
    }
});

client.on("ready", async () => {
    console.log("Bot opérationnel !")
})



/*
client.on("message", message =>{
    if (message.content === clientconfig.prefix + "invite") {
        message.channel.send("Mon lien d'invitation est : https://discord.com/oauth2/authorize?client_id=903640297618169867&scope=bot&permissions=8")
    }
})
*/

client.on('messageCreate', async (message) => {
    if (message.content.toLowerCase().includes("http://")) {
message.react("<:EmoteWarning:987025660277039144>");
    }
});

client.login(process.env.TOKEN);