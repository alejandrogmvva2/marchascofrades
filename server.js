//const Discord = require("discord.js");
//const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
const client = new Client();
let connection;
let bot;

client.on("ready", () => {
  console.log("Bot Listo");
  client.user.setPresence({
    status: "online",
    game: {
      name: "Marchas Cofrades",
        type: "LISTENING"
    }
  });
});
//Uptime Robot 24/7 Host
//*************************************************************
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
console.log(Date.now() + " Ping Received");
response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//*************************************************************

client.on("message", async message => {
  if (!message.guild) return;

  if (message.content === "mc!play") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(
        "https://node-02.zeno.fm/eqvd91xa8a0uv"
         );
      message.react("✅");
         } else {
      message.reply('Necesitas unirte a un canal de voz primero.');
        }
      }
    });
  
  client.login("NzAzMTAxMzY0NzA3Nzg2ODA0.XqJsLA.yZsvyUrTm-Ka4N2zAgyXwdyVujU");
