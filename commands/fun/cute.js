const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cute")
    .setDescription("Valerie tells you how cute you are."),
  async execute(interaction) {
    const value = Math.floor(Math.random() * 101);
    const maxValue = "100";
    const size = "10";

    const progressbar = (value, maxValue, size) => {
      const percentage = value / maxValue;
      const progress = Math.round(size * percentage);
      const emptyProgress = size - progress;

      const progressText = "▰".repeat(progress);
      const emptyProgressText = "▱".repeat(emptyProgress);
      const percentageText = Math.round(percentage * 100) + "%";

      const bar =
        "" + progressText + emptyProgressText + " " + percentageText + " cute";
      return bar;
    };

    const progressBar = progressbar(value, maxValue, size);

    const embed = new EmbedBuilder()
      .setTitle("Cuteness Meter")
      .setDescription(progressBar)
      .setTimestamp()
      .setColor("#ffc0cb");
    interaction.reply({ embeds: [embed] });
  },
};
