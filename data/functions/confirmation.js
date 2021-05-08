async function confirmation(message, author, validReactions, time = 60000) {
    if (!message) throw new ReferenceError('Confirmation : ❌ | Message is not defined !')
    if (!validReactions) throw new ReferenceError('Confirmation : ❌ | Invalid form body [valid reaction]')
    if (typeof time !== "number") throw new SyntaxError('Confirmation : ❌ | Type of "time" must be a number !')
    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return console.log(`Confirmation : ❌ | Client has no permission [MANAGE_MESSAGES]`)

    for (const reaction of validReactions) await message.react(reaction)

    const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id

    return message
        .awaitReactions(filter, { max: 1, time: time })
        .then((collected) => collected.first() && collected.first().emoji.name);
}

module.exports = confirmation;