const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("d20")
    .setDescription("Roll the for it!"),
  async execute(interaction) {
    const randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const roll = randomInt(1, 20);
    interaction.reply(`You roll ${roll}`);
  },
};
