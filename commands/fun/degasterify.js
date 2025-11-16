const {wingDingAlphabet} = require("../../helpers/wingDingTextAlphabet");
const { SlashCommandBuilder } = require("discord.js");
const {escapeRegExp} = require("../../helpers/escapeRegex")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("degasterify")
    .setDescription("Translates your message from WingDings to normal text")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The input to translate")
        .setRequired(true),
    ),
  async execute(interaction) {
    const input = interaction.options.getString("input");
    let newMessageText = input;
    
    Object.entries(wingDingAlphabet).forEach(([oldValue, newValue]) => {
      newMessageText = newMessageText.replace(new RegExp(`${escapeRegExp(oldValue)}`,"g"), `${newValue}`);
    });
    await interaction.reply(newMessageText);
  },
};
