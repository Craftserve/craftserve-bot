module.exports = {
    "name": "backup",
    "description": "Kopie zapasowe",
    "aliases": [],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("Kopie zapasowe serwerów")
            .setDescription('Hosting Craftserve.pl wykonuje kopie serwerów codziennie w nocy (w godzinach między północą a 3-4 rano). Nie ma możliwości przywrócenia stanu serwera sprzed np. 15 minut.\n\nJeżeli chcesz otrzymać kopię zapasową z danego dnia, napisz do nas na support (zakładka Kontakt w panelu, bądź mailowo - support@craftserve.pl).\nKopie wydawane są w formie archiwum .tar (bezproblemowego do otwarcia WinRarem bądź 7-zipem) do samodzielnego wypakowania i wgrania na serwer.')

        return message.channel.send(embed)
    }
}