const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const nomebot = "Alberto ";

client.on('message', message => {
    if (message.content == nomebot + 'mi ami?') {
    	message.reply('si ti amo');
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
