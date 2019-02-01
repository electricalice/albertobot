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
    if (message.content.includes(nomebot + 'ti piace') || message.content.includes(nomebot + 'cosa pensi d') || message.content.includes(nomebot + 'che ne pensi d')) {
        var risposte = [ 'Molto!', 'Non quanto le meraviglie del nostro paese', 'Più di un vaso romano perfettamente conservato', 'Quanto il sistema idraulico di dei romani', 'Non quanto plinio il giovane', 'è un ideale platonico', 'Non quanto gli etruschi', 'Non quanto Alessandro Magno amava Efestione', 'Si, ma mio padre ha più classe', 'Non quanto un buon libro', 'Era meglio la peste nera del 1348', 'Era meglio la peste nera del 1630', 'Come le invasioni dei Mongoli', 'Quanto Michelangelo amava il Papa', 'Quanto a Michelangelo piaceva dipingere', 'Quanto a Bernini piaceva Borromini', 'Quanto a Carlo Magno piacevano le sue mogli', 'Quanto a Federico II piacevano le crociate', 'Quanto a Barbarossa piaceva la lega lombarda', 'E\' una Caporetto.', 'Come Andrea Palladio amava la simmetria', 'Quanto Voyager', ];
        var rand = risposte[Math.floor(Math.random() * risposte.length)];
    	message.channel.send(rand);
  	}
});


client.on('message', message => {
    if (message.content.includes(nomebot + 'ti piacciono')) {
        var risposte = [ 'Molto!', 'Non quanto le meraviglie del nostro paese', 'Più di un vaso romano perfettamente conservato', 'Quanto il sistema idraulico di dei romani', 'Non quanto plinio il giovane', 'Non quanto gli etruschi', 'Non quanto Alessandro Magno amava Efestione', 'Si, ma mio padre ha più classe', 'Non quanto un buon libro', 'Era meglio la peste nera del 1348', 'Era meglio la peste nera del 1630', 'Come le invasioni dei Mongoli', 'Quanto Michelangelo amava il Papa', 'Quanto a Michelangelo piaceva dipingere', 'Quanto a Bernini piaceva Borromini', 'Quanto a Carlo Magno piacevano le sue mogli', 'Quanto a Federico II piacevano le crociate', 'Quanto a Barbarossa piaceva la lega lombarda', 'Non ti curar di loro ma guarda e passa', 'Sono come gli americani in vietnam', 'Quanto Voyager', ];
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
    if (message.content.includes(nomebot + 'aiutami') || message.content.includes(nomebot + 'aiuto') || message.content.includes(nomebot + 'help')) {
        const emojialberto = message.guild.emojis.find('name', 'alberto');
        const emojiangela = message.guild.emojis.find('name', 'angela');
        
    	message.channel.send('Certo, sono qui per te! \n\nPer chiamarmi basta cominciare un messaggio con __Alberto e poi uno spazio e il resto del comando.__ Attenzione a usare **la prima lettera maiuscola!** ' + emojialberto + ' \n\n __**Comandi a cui rispondo**__ (sempre previo utilizzo del nome Alberto) \n **aiutami** - Ti riferirò l\'elenco di comandi disponibili! \n **dimmi qualcosa** - Elargirò pillole di saggezza  \n **parlaci delle meraviglie** - Vi acculturerò sul patrimonio dell\'UNESCO \n **ti piace / ti piacciono** - Chiedimi l\'opinione su qualcosa o qualcuno! \n **perché / dimmi perché** - Forse posso rispondere ai tuoi dubbi esistenziali \n **mi ami?** - Chiedimelo e lo scoprirai \n **come sto?** - Se vuoi un\'opinione onesta \n **come stai?** - Bene grazie! \n\n Per ulteriori informazioni sul canale potete andare su #istruzioni-per-il-canale \n Ciao e a dopo!' + emojiangela );
        
        
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


client.on('message', message => {
    if (message.content.includes(nomebot + 'parlaci delle meraviglie') || message.content.includes(nomebot + 'parlami delle meraviglie')) {
        
        var risposte = [ 'I Baul sono menestrelli mistici che vivono nelle zone rurali del Bangladesh e Bengala Occidentale e India.', 'L\'Azerbaijani Mugham è una forma musicale tradizionale, caratterizzata da un elevato grado di improvvisazione. Il Mugham, anche se un\'arte classica e accademica, attinge melodie Bard popolari, ritmi e tecniche di esecuzione e viene eseguita in molti luoghi in tutto il paese.', 'Il Sbek Thom Cambogiano è un teatro delle ombre Khmer con pupazzi alti non articolati in pelle traforata risalente prima del periodo di Angkor. Il Sbek Thom, insieme con il Royal Ballet e la maschera del teatro, è considerato sacro.', 'Il Xinjiang Uyghur Muqam è il termine generico per una varietà di Muqam pratica diffusa tra le comunità uiguri, che formano una delle più grandi minoranze etniche della Repubblica popolare cinese.', 'Come praticata dalle comunità indigene del Messico, el Día de los Muertos (Giorno dei Morti) commemora il ritorno transitorio sulla Terra di parenti defunti cari. I festeggiamenti si svolgono ogni anno alla fine di ottobre e l\'inizio di novembre.', 'La Fratellanza del Santo Spirito del Congo di Villa Mella è un\'organizzazione composta da musicisti che si specializzano nei tamburi conga. La fratellanza risale al XVI secolo, ed è diventata una parte essenziale della cultura dominicana. Questi musicisti suonano alle feste religiose, ai funerali ed in altre occasioni come il Festival dello Spirito Santo e la cerimonia Banko, quando ricorrono tre anni dalla morte di un individuo.', 'L\'opera dei pupi è una forma di teatro con marionette che fece la sua comparsa al principio del XIX secolo in Sicilia. Nelle sue rappresentazioni, saghe cavalleresche, poemi siciliani e storie della vita di santi e di briganti erano raccontate e parzialmente improvvisate dai pupari. Le due scuole principali dell\'opera dei pupi, quelle di Catania e Palermo, si differenziano per le caratteristiche dei pupi così come per le tecniche per manovrarli e per gli scenarii. I metodi di rappresentazione si tramandavano solitamente di padre in figlio, mentre la realizzazione delle marionette era curata da artigiani specializzati.', 'La Grande barriera corallina (in inglese Great Barrier Reef) è la barriera di corallo più grande del mondo, composta da oltre 2 900 barriere coralline singole e da 900 isole; si estende per 2 300 km, su una superficie di circa 344 400 km². La Grande Barriera Corallina sta per perdere lo status di patrimonio mondiale dell\'Unesco, guadagnato nel 1981.', 'L\'esercito di terracotta è un insieme di statue collocato nel Mausoleo del primo imperatore Qin a Xi\'an. Si tratta di un esercito simbolico, destinato a servire il primo imperatore cinese Qin Shi Huang (260 a.C. - 210 a.C.) nell\'Aldilà. Nel 1987 il mausoleo dell\'imperatore Qin Shi Huang, di cui l\'esercito di terracotta fa parte, è stato inserito nell\'elenco dei Patrimoni dell\'umanità dell\'UNESCO.', 'Il Cammino di Santiago di Compostela è intimamente legato alla presenza della tomba di Giacomo il Maggiore e al suo ritrovamento, che risale al IX secolo. Anche se Giacomo è morto in Palestina, come scritto negli Atti degli Apostoli (At12,1-2), la Legenda Aurea racconta:```San Giacomo il Maggiore dopo l\'ascesa di Gesù al cielo iniziò la sua opera di evangelizzazione della Spagna spingendosi fino in Galizia, remota regione di cultura celtica all\'estremo ovest della penisola iberica. Terminata la sua opera Giacomo tornò in Palestina dove fu decapitato per ordine di Erode Agrippa nell\'anno 44. I suoi discepoli, con una barca, guidata da un angelo, ne trasportarono il corpo nuovamente in Galizia per seppellirlo in un bosco vicino ad Iria Flavia, il porto romano più importante della zona. Nei secoli le persecuzioni e le proibizioni di visitare il luogo fanno sì che della tomba dell\'apostolo si perdano memoria e tracce. Nell\'anno 813 l\'eremita Pelagio (o Pelayo), preavvertito da un angelo, vide delle strane luci simili a stelle sul monte Liberon, dove esistevano antiche fortificazioni probabilmente di un antico villaggio celtico. Il vescovo Teodomiro, interessato dallo strano fenomeno, scoprì in quel luogo una tomba, probabilmente di epoca romana, che conteneva tre corpi, uno dei tre aveva la testa mozzata ed una scritta: "Qui giace Jacobus, figlio di Zebedeo e Salomé.```', 'Il centro storico di Roma, delimitato dal perimetro delle mura aureliane, sovrapposizione di testimonianze di quasi tre millenni è espressione del patrimonio storico, artistico e culturale del mondo occidentale europeo e, nel 1980, insieme alle proprietà extraterritoriali della Santa Sede nella città, è stato inserito nella lista dei Patrimoni dell\'umanità dell\'UNESCO, provvedimento esteso nel 1990 ai territori compresi all\'interno delle mura gianicolensi, edificate per volere di papa Urbano VIII.', 'Il Taj Mahal (in urdu: تاج محل; in hindi: ताज महल), situato ad Agra, nell\'India settentrionale (stato di Uttar Pradesh), è un mausoleo fatto costruire nel 1632 dall\'imperatore moghul Shah Jahan in memoria della moglie preferita Arjumand Banu Begum, meglio conosciuta come Mumtaz Mahal. Nonostante vi siano molti dubbi riguardo al nome dell\'architetto che lo progettò, generalmente si tende a considerare Ustad Ahmad Lahauri il padre dell\'opera. È da sempre considerata una delle più notevoli bellezze dell\'architettura musulmana in India ed è tra i patrimoni dell\'umanità dell\'UNESCO dal 9 dicembre 1983.', 'Vista nell\'immaginario collettivo come i resti di un\'antica e fascinosa città perduta, Machu Picchu è oggi universalmente conosciuta sia per le sue imponenti ed originali rovine, sia per l\'impressionante vista che si ha sulla sottostante valle dell\'Urubamba circa 400 metri più in basso. Fa parte dei Patrimoni dell\'umanità stilati dall\'UNESCO, eletto nel 2007 come una delle Sette meraviglie del mondo moderno. È il terzo sito archeologico più grande del mondo dopo gli scavi di Pompei e Ostia Antica: nel 2003, più di 400mila persone hanno visitato le rovine e l\'UNESCO ha espresso preoccupazione per i danni ambientali che un tale volume di turisti può arrecare al sito.', 'Il Monte Athos o repubblica monastica del Monte Athos (in greco Αυτόνομη Μοναστική Πολιτεία Αγίου Όρους Aftónomi Monastikí Politía Agíou Órous) è un territorio autonomo della Grecia, dotato di uno statuto speciale di autogoverno (art. 105 della Costituzione greca). Confina per una sottile striscia di terra con la Macedonia Centrale. L\'amministrazione del territorio è affidata a un collegio, la Sacra comunità[1] (in greco Ιερά Κοινότητα, Iera Kinotita), che riunisce i rappresentanti dei 20 monasteri atoniti, alle cui dipendenze vi è un comitato esecutivo di quattro membri, la Ιερά Επιστασία (Iera Epistasia), presieduta a rotazione dal rappresentante di un monastero, il Protos. La repubblica è soggetta alla giurisdizione ecclesiastica del Patriarcato ecumenico di Costantinopoli e a quella politica del ministero per gli affari esteri greco: lo Stato greco è infatti rappresentato da un governatore con l\'incarico di sovrintendere all\'amministrazione del territorio e di farne rispettare lo statuto, con responsabilità esclusiva per la salvaguardia dell\'ordine pubblico e della sicurezza.',
                       
                       
                       ];
        var rand = risposte[Math.floor(Math.random() * risposte.length)];
    	message.channel.send(rand);
  	}
});



   var rispostefrappe = [ 'Ti sbagli, si chiamano Frappe', 'E\' un errore comune, ma in realtà si chiamano Frappe', 'E\' sbagliato, si chiamano Frappe' ];

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
    
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
