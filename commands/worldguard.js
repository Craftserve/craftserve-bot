module.exports = {
    "name": "worldguard",
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("WorldGuard na serwerze")
            .setDescription('Informacje na temat worldguarda znajdziesz tutaj:\nhttps://github.com/Craftserve/docs/blob/master/worldguard.md')

        return message.channel.send(embed)
    }
}