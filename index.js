const Discord = require("discord.js")
const TOKEN = "OTMxOTc3NTEzNzcxNjEwMTUy.YeMRsg.tD9d5RZ5eklG1ij1LlOniJvoxfo"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Un verre !"){
        message.reply("Oui tout de suite ! https://media.giphy.com/media/rfYbaXAyuHxAmWXckg/giphy.gif")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "Merci Barmaid !"){
        message.reply("Tout le plaisir est pour moi~")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "Barmaid comment vas-tu ?"){
        message.reply("Je vais bien merci ! Et vous donc ?")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "Barmaid sais-tu ou est la Patronne ?"){
        message.reply("Si elle n'est point ici à faire la causette avec nous, c'est qu'elle doit être occupée avec sa femme ( ͡° ͜ʖ ͡°)")
       
    }
})

client.login(TOKEN)
