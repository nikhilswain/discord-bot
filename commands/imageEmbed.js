// Slash command to send an embeded message with attachments(picture, links, profilepic)

const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageAttachment } = require("discord.js");

const exampleEmbed = {
  color: 0x0099ff,
  title: "Chrissy's Picture",
  url: "https://www.google.com/search?rlz=1C1RXQR_enIN977IN977&sxsrf=AOaemvJDyG1PeOQ4TQE2XVpl0aQPVcOWUw:1641828586889&source=univ&tbm=isch&q=chrissy+costanza+pic&fir=58IMaNE_m8egUM%252CN4VtEaSnbdOS4M%252C_%253Bi2Zr5xvv4nMYHM%252C1wF_ENqBFxFkgM%252C_%253BIiLG25U27Rqd1M%252CLm9Gggzdz5CqoM%252C_%253Bp3xp6MgqJiYhmM%252CN4VtEaSnbdOS4M%252C_%253BcFXAI6o7MA4rQM%252Cz9Oplyg6wPuPhM%252C_%253BIpbEZS3VwyAJBM%252CN4VtEaSnbdOS4M%252C_%253BNWvvXEWO7VRz7M%252C1wF_ENqBFxFkgM%252C_%253BMY0IHjU4c1Z-_M%252C1wF_ENqBFxFkgM%252C_%253BFkpUG3zgX9pgaM%252C1wF_ENqBFxFkgM%252C_%253BvX69HTF5bfFd6M%252CN4VtEaSnbdOS4M%252C_%253BNip7j9t2jZQaRM%252CVIXhkO0WRsUfxM%252C_%253BpngDkBZv83JB9M%252C1wF_ENqBFxFkgM%252C_%253BRPNUEpgHiZwAeM%252C21Tj9JYl7MJDRM%252C_%253BOf53lze36eqRNM%252CewHgdlTKHZLTLM%252C_&usg=AI4_-kQ57mDonpLVhLA5Vgd0jD7YXCdfXA&sa=X&ved=2ahUKEwjRjNCNwKf1AhXJ4jgGHa10AxAQ7Al6BAgCEGA&biw=1366&bih=657&dpr=1",
  author: {
    name: "Chrissy Costanza",
    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0omN4NJyVBxqcccjbnSaq8fJLEyNx9JFP1g&usqp=CAU",
  },
  description: "A beautiful pic of chrissy costanza",
  thumbnail: {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGP_mpm1a8SebUpeQzOSbCkQT4DyhbKvnGw&usqp=CAU",
  },
  fields: [
    {
      name: "Singer At:",
      value: "Against the current",
    },
    {
      name: "\u200b",
      value: "\u200b",
      inline: false,
    },
    {
      name: "Song 1",
      value: "Voices",
      inline: true,
    },
    {
      name: "Song 2",
      value: "Fuss",
      inline: true,
    },
  ],
  image: {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKPlAWjRC6WDv1aRilo6M70Z0kqCRr1mIBQ&usqp=CAU",
  },
  timestamp: new Date(),
  footer: {
    text: "Chrissy costanza most lovable singer",
    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0omN4NJyVBxqcccjbnSaq8fJLEyNx9JFP1g&usqp=CAU",
  },
};

module.exports = {
  data: new SlashCommandBuilder().setName("imageembed").setDescription("sends an embeded message attachment."),
  async execute(interaction) {
    interaction.reply({ embeds: [exampleEmbed] });
  },
};
