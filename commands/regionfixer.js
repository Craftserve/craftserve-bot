module.exports = {
    "name": "regionfixer",
    "description": "Naprawa popsutej mapy",
    "aliases": [],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Masz uszkodzoną mapę?")
            .setDescription('Spróbuj naprawić ją tym https://github.com/Fenixin/Minecraft-Region-Fixer\nInstalacja: https://github.com/Fenixin/Minecraft-Region-Fixer/wiki/Installation\nJak używać: https://github.com/Fenixin/Minecraft-Region-Fixer/wiki/Usage')


        const text = args.join(" ");

        return message.channel.send(text, embed)
    }
}