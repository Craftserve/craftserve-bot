module.exports = {
    "name": "forgetimings",
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Timingi Forge")
            .setDescription('https://mcforge.readthedocs.io/en/latest/gettingstarted/debugprofiler/')

        return message.channel.send(embed)
    }
}