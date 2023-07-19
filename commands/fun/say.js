const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Make the bot say something")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("User input to make the bot say it.")
        .setRequired(true)
    ),
  async execute(interaction) {
    const question = interaction.options.getString("input");

    interaction.reply(question);
  },
};
