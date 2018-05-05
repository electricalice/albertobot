const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const nomebot = "Alberto ";

client.on('message', message => {
    if (message.content == nomebot + 'mi ami?') {
    	message.reply('si certo');
  	}
});

client.on('message', message => {
    if (message.content == nomebot + 'aiutami') {
    	message.reply('Se studi vai ovunque!');
  	}
});

client.on('message', message => {
    if (message.content == nomebot + 'dimmi qualcosa') {
    	message.reply('Sii la persona che io vorrei tu fossi!');
  	}
});


client.on('message', message => {
    if (message.content == 'chiacchiere') {
    	message.reply('Ti sbagli, si chiamano Frappe');
  	}
});

client.on('message', message => {
    if (message.content == 'bugie') {
    	message.reply('E\' un errore comune, ma in realtà si chiamano Frappe');
  	}
});
client.on('message', message => {
    if (message.content == 'crostoli') {
    	message.reply('E\' sbagliato, si chiamano Frappe');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
