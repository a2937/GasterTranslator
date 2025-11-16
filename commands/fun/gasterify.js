const {englishToGlyphAlphabet} = require("../../helpers/wingDingTextAlphabet");
const { SlashCommandBuilder } = require("discord.js");
const {escapeRegExp} = require("../../helpers/escapeRegex")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gasterify")
    .setDescription("Translates your message from normal text to WingDings")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The input to translate")
        .setRequired(true),
    ),
  async execute(interaction) {
    const input = interaction.options.getString("input");
    let newMessageText = input;
    
    Object.entries(englishToGlyphAlphabet).forEach(([oldValue, newValue]) => {
      console.log(`${oldValue}`);
      newMessageText = newMessageText.replace(new RegExp(`${escapeRegExp(oldValue)}`,"g"), `${newValue}`);
    });
    await interaction.reply(newMessageText);
  },
};
