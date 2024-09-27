import { Client } from "discord.js";
import { config } from "dotenv";

config();

const client = new Client({
    intents: ["Guilds", "GuildMessages", "MessageContent"],
});

client.on("messageCreate", async (msg) => {
    if (msg.content == "hello") {
        msg.reply("hi");
    }
});

async function start() {
    await client.login(process.env.DISCORD_BOT_KEY);

    console.log("login success");
}

start();
