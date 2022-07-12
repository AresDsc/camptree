module.exports = {
    name: 'say',
    description: 'Répète ce que vous avez dit',
    execute(message, args) {        
        const log = args.join(" ").slice()

        message.delete();
        message.channel.send(args.join(" ").slice());
        console.log(`${message.author.username} a dit : ` + log);
    }
};