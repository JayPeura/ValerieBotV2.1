const { SlashCommandBuilder } = require("discord.js");
const { giphytoken } = require("../../config.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gif")
    .setDescription("Search for a gif from Giphy")
    .addStringOption((option) =>
      option
        .setName("keyword")
        .setDescription("Search a gif with a keyword")
        .setRequired(true)
    ),
  async execute(interaction) {
    const keyword = interaction.options.getString("keyword");
    const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${giphytoken}`;

    const res = await fetch(url);
    const json = await res.json();

    const randomIndex = Math.floor(Math.random() * json.data.length);
    interaction.reply(json.data[randomIndex].url);
  },
};
