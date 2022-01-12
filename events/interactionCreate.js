// Event to trigger interaction

module.exports = {
  name: "interactionCreate",
  async execute(interaction) {
    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
    if (!interaction.isCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (err) {
      console.log(err);
      await interaction.reply({ content: "there was an error excuting this command!", ephemeral: true });
    }
  },
};
