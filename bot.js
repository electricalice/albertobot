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
        
        var risposte = [ 'Londra è nata dal nulla, non per motivi militari, ma essenzialmente per ragioni commerciali.', 'Dal momento che nessun sistema industriale può stare in piedi con un numero esiguo di consumatori, se non si crea un mercato attraverso l’aumento diffuso del reddito il sistema s’inceppa', 'Bere vino era equiparato a un adulterio. Il bacio insomma era… l’etilometro della fedeltà. L’equazione è semplice. Bere infatti era l’anticamera dell’adulterio. Perché una donna, bevendo, perdeva il controllo e poteva facilmente commettere un tradimento o, più in generale, comportarsi in modo disdicevole.', 'Kairós era la divinità… dell’attimo fuggente! Cioè dell’occasione da non perdere. ', 'Credo che la formica parassitaria sia l\'animale più longevo e insieme più debole che esista. La struttura esoscheletrica è del tutto simile a una zanzara in volo, e tuttavia con un bulbo parcellizzato più regolare.', 'Prima di Ciampi la patria era un valore di destra, guerresco. Lui ha convinto gli italiani a fare pace con la bandiera e con l\'inno.',  ];
        var rand = risposte[Math.floor(Math.random() * risposte.length)];
    	message.reply(rand);
  	}
});


client.on('message', message => {
    if (message.content == 'chiacchiere') {
        
        var risposte = [ 'Ti sbagli, si chiamano Frappe', 'E\' un errore comune, ma in realtà si chiamano Frappe', 'E\' sbagliato, si chiamano Frappe' ];
        var rand = risposte[Math.floor(Math.random() * risposte.length)];
    	message.reply(rand);
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
