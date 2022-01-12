// Event to get ready the bot.

module.exports = {
  name: "ready",
  once: true,
  execute(client, commands) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};
