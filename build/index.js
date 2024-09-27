"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const client = new discord_js_1.Client({
    intents: ["Guilds", "GuildMessages", "MessageContent"],
});
client.on("messageCreate", async (msg) => {
    console.log(msg.content);
    if (msg.content == "hello") {
        msg.reply("hi");
    }
});
async function start() {
    await client.login(process.env.DISCORD_BOT_KEY);
    console.log("login success");
}
start();
