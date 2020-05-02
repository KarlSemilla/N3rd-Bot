/*
    Using the Discord.js library to use the Discord API. https://discord.js.org/#/
*/
const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
const auth = require("./bot-token.json");

//Added a cointoss module from https://www.npmjs.com/package/coin-toss
const coin = require("./handlers/coin-handler");

/*
    We'll be using Twitch Webhooks when a streamer on the Discord server goes live.
    https://dev.twitch.tv/docs/api/webhooks-reference#topic-stream-changed
*/

client.on("ready", () => {
  console.log("Bot is active!");
});

client.on("message", (msg) => {
  if (msg.content === `${config.prefix}hello`) {
    msg.reply("Hello!");
  }
});

client.on("message", (msg) => {
  if (msg.content === `${config.prefix}flip`) {
    msg.reply(coin.flip());
  }
});

client.login(auth.token);
