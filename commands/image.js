// slash command to send a picture with title.
// Reomve title key from exampleEmbed to send a plain picture.

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");

const file = new MessageAttachment("./chrissypic.jpg");

const exampleEmbed = {
  title: "chrisy costanza",
  image: {
    url: "attachment://chrissypic.png",
  },
};

module.exports = {
  data: new SlashCommandBuilder().setName("image").setDescription("Sends A image of Chrissy Costanza with title."),
  async execute(interaction) {
    interaction.reply({ embeds: [exampleEmbed], files: [file] });
  },
};
