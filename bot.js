const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
const senzasp = "Alberto";
const nomebot = "Alberto" + " ";



// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Benvenut* nel Cipolla Channel, ${member}! Spero ti troverai bene!`);
});


client.on('message', message => {
    if (message.content == nomebot + 'mi ami?') {
    	message.reply('si certo, ti amo tantissimo.');
  	}
});

client.on('message', message => {
    if (message.content == nomebot + 'id') {
message.channel.send('${channel 442734212802543636} ${channel}\nNome del server: ${message.guild.name} \nid canale: ${message.channel.id} \nnome canale: ${message.channel.name}');

        message.author.send('ILU');
  	}
});


        var risposteperche = [ 'La risposta è andata perduta nei secoli', 'Perché la vita è piena di sofferenza', 'Perché si.',  'E\' un mistero senza risposta', 'Lo sa solo la sibilla di cuma', 'Perché così va il mondo', 'Perché così hanno deciso le leggi della fisica', 'Perché l’evoluzione non è un’opinione', 'Non lo so, ma sicuramente il Polpo Paul lo sa',];


client.on('message', message => {
    if (message.content.includes(nomebot + 'dimmi perché') || message.content.includes(nomebot + 'dimmi perchè')) {
        var rand = risposteperche[Math.floor(Math.random() * risposteperche.length)];
    	message.channel.send(rand);
  	}
});


client.on('message', message => {
    if (message.content.includes(nomebot + 'perché') || message.content.includes(nomebot + 'perchè')) {
        var rand = risposteperche[Math.floor(Math.random() * risposteperche.length)];
    	message.channel.send(rand);
  	}
});




client.on('message', message => {
    if (message.content.includes(nomebot + 'ti piace')) {
        var risposte = [ 'Molto!', 'Non quanto le meraviglie del nostro paese', 'Più di un vaso romano perfettamente conservato', 'Quanto il sistema idraulico di dei romani', 'Non quanto plinio il giovane', 'è un ideale platonico', 'Non quanto gli etruschi', 'Non quanto alessandro magno amava Efestione', 'Si, ma mio padre ha più classe', 'Non quanto un buon libro', ];
        var rand = risposte[Math.floor(Math.random() * risposte.length)];
    	message.channel.send(rand);
  	}
});


client.on('message', message => {
    if (message.content.includes(nomebot + 'ti piacciono')) {
        var risposte = [ 'Molto!', 'Non quanto le meraviglie del nostro paese', 'Più di un vaso romano perfettamente conservato', 'Quanto il sistema idraulico di dei romani', 'Non quanto plinio il giovane', 'Non quanto gli etruschi', 'Non quanto alessandro magno amava Efestione', 'Si, ma mio padre ha più classe', 'Non quanto un buon libro', ];
        var rand = risposte[Math.floor(Math.random() * risposte.length)];
    	message.channel.send(rand);
  	}
});


client.on('message', message => {
    if (message.content.includes(nomebot + 'ti amo')) {
         message.react('💕');
    	message.reply('Ti amo anche io!');
  	}
});

client.on('message', message => {
    if (message.content.includes('razie ' + senzasp)) {
    	message.reply('prego!');
  	}
});


client.on('message', message => {
    if (message.content.includes('GRAZIE ALBERTO') || message.content.includes('grazie alberto')) {
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
        const emojialberto = message.guild.emojis.find('name', 'alberto');
        const emojiangela = message.guild.emojis.find('name', 'angela');
        
    	message.channel.send('Certo, sono qui per te! \n\nPer chiamarmi basta cominciare un messaggio con __Alberto e poi uno spazio e il resto del comando.__ Attenzione a usare **la prima lettera maiuscola!** ' + emojialberto + ' \n\n __**Comandi a cui rispondo**__ (sempre previo utilizzo del nome Alberto) \n **aiutami** - Ti riferirò l\'elenco di comandi disponibili! \n **dimmi qualcosa** - Elargirò pillole di saggezza \n **ti piace / ti piacciono** - Chiedimi l\'opinione su qualcosa o qualcuno! \n **perché / dimmi perché** - Forse posso rispondere ai tuoi dubbi esistenziali \n **mi ami?** - Chiedimelo e lo scoprirai \n **come sto?** - Se vuoi un\'opinione onesta \n **come stai?** - Bene grazie! \n\n Per ulteriori informazioni sul canale potete andare su #istruzioni-per-il-canale \n Ciao e a dopo!' + emojiangela );
        
        
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
    	message.channel.send('E\' un genio assoluto. E bellissima. Me la sposerò!');
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
    	message.channel.send(rand);
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
