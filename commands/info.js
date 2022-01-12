// Slash commands with option and subcommands.
// sumbcommands can be choosen within an option.

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("info command for user and server")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("user")
        .setDescription("info about user")
        .addUserOption((option) => option.setName("target").setDescription("The user"))
    )
    .addSubcommand((subcommand) => subcommand.setName("server").setDescription("info about server")),
  async execute(interaction) {
    if (interaction.commandName === "info") {
      if (interaction.options.getSubcommand() === "user") {
        const user = interaction.options.getUser("target");

        if (user) {
          await interaction.reply(`Username: ${user.username}\nID: ${user.id}`);
        } else {
          await interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
        }
      } else if (interaction.options.getSubcommand() === "server") {
        await interaction.reply(
          `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
        );
      }
    }
  },
};
