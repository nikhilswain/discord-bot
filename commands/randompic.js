// Slash command to send a random picture from an API

const { SlashCommandBuilder } = require("@discordjs/builders");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder().setName("randompic").setDescription("Sends a random pic of anime characters!"),
  execute(interaction) {
    const options = {
      method: "GET",
      url: "https://api.miku.is/random",
    };

    axios
      .request(options)
      .then(function (response) {
        const exampleEmbed = {
          image: {
            url: response.data.images[0],
          },
        };

        interaction.reply({ embeds: [exampleEmbed] });
      })
      .catch(function (error) {
        console.error(error);
      });
  },
};
