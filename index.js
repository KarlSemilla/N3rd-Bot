/*
    Using the Discord.js library to use the Discord API. https://discord.js.org/#/
*/
const Discord = require("discord.js");
const client = new Discord.Client();

const token = require("./bot-token.json");
/*
    We'll be using Twitch Webhooks when a streamer on the Discord server goes live.
    https://dev.twitch.tv/docs/api/webhooks-reference#topic-stream-changed
*/

client.on("ready", () => {
  console.log("Bot is active!");
});

client.on("message", (msg) => {
  if (msg.content === "!hello") {
    msg.reply("Hello!");
  }
});

client.login(token.token);
