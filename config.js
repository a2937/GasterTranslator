const dotenv = require("dotenv");

dotenv.config();

const { DISCORD_TOKEN, CLIENT_ID, GUILD_ID } = process.env;

module.exports = {
  DISCORD_TOKEN, CLIENT_ID ,GUILD_ID
}

