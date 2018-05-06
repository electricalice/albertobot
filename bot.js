const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
const senzasp = "Alberto";
const nomebot = "Alberto" + " ";

client.on('message', message => {
    if (message.content == nomebot + 'mi ami?') {
    	message.reply('si certo, ti amo tantissimo.');
  	}
});

        var risposteperche = [ 'La risposta è andata perduta nei secoli', 'Perché la vita è piena di sofferenza', 'Perché si.',  'E\' un mistero senza risposta', ];


client.on('message', message => {
    if (message.content.includes(nomebot + 'dimmi perché') || message.content.includes(nomebot + 'dimmi perchè')) {
        var rand = risposteperche[Math.floor(Math.random() * risposteperche.length)];
    	message.reply(rand);
  	}
});


client.on('message', message => {
    if (message.content.includes(nomebot + 'perché') || message.content.includes(nomebot + 'perchè')) {
        var rand = risposteperche[Math.floor(Math.random() * risposteperche.length)];
    	message.reply(rand);
  	}
});




client.on('message', message => {
    if (message.content.includes(nomebot + 'ti piace')) {
        var risposte = [ 'Molto!', 'Non quanto le meraviglie del nostro paese', 'Più di un vaso romano perfettamente conservato', ];
        var rand = risposte[Math.floor(Math.random() * risposte.length)];
    	message.reply(rand);
  	}
});

client.on('message', message => {
    if (message.content.includes(nomebot + 'ti amo')) {
    	message.reply('Lo so!');
  	}
});

client.on('message', message => {
    if (message.content.includes('razie ' + senzasp)) {
    	message.reply('prego!');
  	}
});


client.on('message', message => {
    if (message.content.includes('GRAZIE ALBERTO')) {
    	message.reply('Non c\'è di che!!');
  	}
});

client.on('message', message => {
    if (message.content.includes(nomebot + 'ciao')) {
    	message.reply('Ciao!');
  	}
});

client.on('message', message => {
    if (message.content.includes(nomebot + 'perché mi ignori')) {
    	message.reply('No, non ti sto ignorando!');
  	}
});

client.on('message', message => {
    if (message.content.includes(nomebot + 'perchè mi ignori')) {
    	message.reply('No, non ti sto ignorando!');
  	}
});

client.on('message', message => {
    if (message.content.includes(nomebot + 'aiutami')) {
    	message.reply('Certo, sono qui per te!');
  	}
});

client.on('message', message => {
    if (message.content == nomebot + 'che ne pensi di Lavinia?') {
    	message.reply('mmmmh.... non saprei. Non mi sembra molto intelligente.');
  	}
});

client.on('message', message => {
    if (message.content == nomebot + 'come sto?') {
    	message.reply('Stai benissimo!');
  	}
});

client.on('message', message => {
    if (message.content == nomebot + 'come stai?') {
    	message.reply('Benissimo! E tu?');
  	}
});

client.on('message', message => {
    if (message.content == nomebot + 'che ne pensi di Martina?') {
    	message.reply('E\' un genio assoluto. E bellissima. Me la sposerò!');
  	}
});

client.on('message', message => {
    if (message.content.includes(nomebot + 'grazie')) {
    	message.reply('Prego!');
  	}
});

client.on('message', message => {
    if (message.content.includes(nomebot + 'dimmi qualcosa')) {
        
        var risposte = [ 'Londra è nata dal nulla, non per motivi militari, ma essenzialmente per ragioni commerciali.', 'Dal momento che nessun sistema industriale può stare in piedi con un numero esiguo di consumatori, se non si crea un mercato attraverso l’aumento diffuso del reddito il sistema s’inceppa', 'Bere vino era equiparato a un adulterio. Il bacio insomma era… l’etilometro della fedeltà. L’equazione è semplice. Bere infatti era l’anticamera dell’adulterio. Perché una donna, bevendo, perdeva il controllo e poteva facilmente commettere un tradimento o, più in generale, comportarsi in modo disdicevole.', 'Kairós era la divinità… dell’attimo fuggente! Cioè dell’occasione da non perdere. ', 'Credo che la formica parassitaria sia l\'animale più longevo e insieme più debole che esista. La struttura esoscheletrica è del tutto simile a una zanzara in volo, e tuttavia con un bulbo parcellizzato più regolare.', 'Prima di Ciampi la patria era un valore di destra, guerresco. Lui ha convinto gli italiani a fare pace con la bandiera e con l\'inno.', 'In araldica il topo simboleggia l\'uomo discreto e prudente. Compare raramente nelle armi. Definito spesso sorcio.',  'I Greci cominciarono a colonizzare la Magna Grecia e la Sicilia in modo continuativo e permanente nell\'VIII secolo a.C. Le loro nuove fondazioni sulle coste di quelle aree fiorirono rapidamente diventando città indipendenti e autogovernate e non c\'è miglior testimonianza della loro prosperità e vitalità che l\'abbondanza di coniazioni emesse dalla maggior parte di loro nell\'arco di un lungo periodo di tempo.', 'Al loro ingresso in Italia, i Longobardi portarono con sé la propria tradizione artistica di matrice germanica, anche se già influenzata da elementi bizantini durante il lungo soggiorno del popolo in Pannonia (VI secolo). Tale matrice rimase a lungo visibile soprattutto negli elementi ornamentali dell\'arte (simbolismo, decori fitomorfi o zoomorfi).', 'All\'età di ventidue anni Camillo Benso Conte di Cavour venne nominato sindaco di Grinzane, dove la famiglia aveva dei possedimenti, e ricoprì tale carica per ben 17 anni. In questo lungo periodo, oltre a distinguersi come amministratore efficiente e capace, fu anche innovatore in campo agrario ed enologico: a Cavour infatti è attribuita l\'invenzione del Barolo, inteso come procedimento di invecchiamento del vino Nebbiolo.', 'Quella della Repubblica rappresentò una fase lunga, complessa e decisiva della storia romana: costituì un periodo di enormi trasformazioni per Roma, che da piccola città stato quale era alla fine del VI secolo a.C. divenne, alla vigilia della fondazione dell\'Impero, la capitale di un vasto e complesso Stato, formato da una miriade di popoli e civiltà differenti, avviato a segnare in modo decisivo la storia dell\'Occidente e del Mediterraneo.', 
                       
                       
                       ];
        var rand = risposte[Math.floor(Math.random() * risposte.length)];
    	message.reply(rand);
  	}
});

/*        var rispostefrappe = [ 'Ti sbagli, si chiamano Frappe', 'E\' un errore comune, ma in realtà si chiamano Frappe', 'E\' sbagliato, si chiamano Frappe' ];

client.on('message', message => {
    if (message.content.includes('chiacchiere')) {
        var rand = rispostefrappe[Math.floor(Math.random() * rispostefrappe.length)];
    	message.reply(rand);
  	}
    
});
client.on('message', message => {
    if (message.content.includes('bugie')) {
        var rand = rispostefrappe[Math.floor(Math.random() * rispostefrappe.length)];
    	message.reply(rand);
  	}
    
});
client.on('message', message => {
    if (message.content.includes('crostoli')) {
        var rand = rispostefrappe[Math.floor(Math.random() * rispostefrappe.length)];
    	message.reply(rand);
  	}
    
});*/




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
