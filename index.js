// main file.

const { Client, Intents, Collection, Interaction } = require("discord.js");
const { token } = require("./config.json");
const fs = require("fs");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// fetching commands from /commands folder
const commands = [];
client.commands = new Collection();
const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

// fetching events from /events folder

const eventFiles = fs.readdirSync("./events").filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, commands));
  } else {
    client.on(event.name, (...args) => event.execute(...args, commands));
  }
}

client.login(token);
