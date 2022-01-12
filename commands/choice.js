// slash command with  categories.

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gif")
    .setDescription("Sends a random gif!")
    .addStringOption((option) =>
      option
        .setName("category")
        .setDescription("The gif category")
        .setRequired(true)
        // .addChoice("Funny", "gif_funny")
        // .addChoice("Meme", "gif_meme")
        // .addChoice("Movie", "gif_movie")
        .addChoices([
          ["Funny", "gif_funny"],
          ["Movie", "gif_meme"],
        ])
    ),
  async execute(interaction) {
    if (interaction.commandName === "gif") {
      if (interaction.options.getString("category") === "gif_funny") {
        await interaction.reply("gif_funny");
        // console.log(interaction.options.hoistedOption);
      } else if (interaction.options.getString("category") === "gif_meme") {
        await interaction.reply("gif_meme");
      } else if (interaction.options.getString("category") === "gif_movie") {
        await interaction.reply("gif_movie");
      }
    }
  },
};
