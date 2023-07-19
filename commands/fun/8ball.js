const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Get your response from the magic 8ball!")
    .addStringOption((option) =>
      option
        .setName("question")
        .setDescription("The question to be asked")
        .setRequired(true)
    ),
  async execute(interaction) {
    const question =
      interaction.options.getString("question") ??
      "[WARNING] No question asked somehow??";

    const replies = [
      "As I see it, yes.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don’t count on it.",
      "It is certain.",
      "It is decidedly so.",
      "Most likely.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Outlook good.",
      "Reply hazy, try again.",
      "Signs point to yes.",
      "Very doubtful.",
      "Without a doubt.",
      "Yes.",
      "Yes – definitely.",
      "You may rely on it.",
    ];
    interaction.reply(
      `You asked: "${question}" and I reply to that: ` +
        replies[Math.floor(Math.random() * replies.length)]
    );
  },
};
