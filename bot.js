
const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ".";

client.on('ready', () => {
	console.log('Avatar iS Here');
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`b 1.0`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Avatar ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
});



    const dreamv2 = ["600369127907131412"]
    client.on('message', message => {
        var dream = message.content.split(` `).slice(1).join(' ');
          if (!dreamv2.includes(message.author.id)) return;
          if(message.content.startsWith(prefix + "sg")){
            client.user.setActivity(dream);
            message.channel.send(`✔️ **Done Playing Now __${dream}__**`)
        }
          if (message.content.startsWith(prefix + 'sw')) {
      client.user.setActivity(dream, {type:'WATCHING'});
          message.channel.send(`✔️  **Done Watching Now __${dream}__ **`)
      } else
      if (message.content.startsWith(prefix + 'sl')) {
      client.user.setActivity(dream , {type:'LISTENING'});
          message.channel.send(`✔️ **Done Listening Now __${dream}__** `)
      } else
      if (message.content.startsWith(prefix + 'st')) {
    client.user.setGame(dream, "https://www.twitch.tv/Avatar");
         message.channel.send(`✔️ **Done Stream Now  __${dream}__ **`)
      }
 
    });


client.login('NjAwMzY5MTI3OTA3MTMxNDEy.XTNXmg.GO67n3NipjRI2VTkxxgO096UGJc');//
