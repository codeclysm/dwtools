var it = function (value) {
	var labels = {
		prosperity: 'Prosperità',
		prosperity0: 'Misera',
		prosperity0long: 'Niente in vendita, nessuno ha più dell’indispensabile (ed è fortunato se ce l’ha). La manodopera comune è economica.',
		prosperity1: 'Povera',
		prosperity1long: 'Solo l’essenziale in vendita. Le armi sono scarse a meno che l’insediamento non sia pesantemente difeso o militante.',
		prosperity2: 'Moderata',
		prosperity2long: 'La maggior parte degli oggetti ordinari è reperibile. Si può trovare manodopera specializzata.',
		prosperity3: 'Benestante',
		prosperity3long: 'Qualunque oggetto ordinario si trova in vendita. Si possono trovare i più importanti tipi di manodopera specializzata, ma la domanda per il loro lavoro è alta.',
		prosperity4: 'Ricca',
		prosperity4long: 'Oggetti ordinari e anche più, se sai dove trovarli. Manodopera specializzata disponibile, ma a caro prezzo.',

		population: 'Popolazione',
		population0: 'Esodo',
		population0long: 'L’insediamento ha perso la sua popolazione ed è sul punto di scomparire.',
		population1: 'In diminuzione',
		population1long: 'La popolazione è minore di una volta. Alcuni edifici sono vuoti.',
		population2: 'Stabile',
		population2long: 'La popolazione è in linea con le dimensioni correnti dell’insediamento. C’è una crescita lenta.',
		population3: 'In crescita',
		population3long: 'Più persone che edifici.',
		population4: 'Forte espansione',
		population4long: 'Le risorse scarseggiano mentre si cerca di accontentare tutta questa gente.',

		defenses: 'Difese',
		defenses0: 'Nessuna',
		defenses0long: 'Clave, torce, attrezzi da contadino.',
		defenses1: 'Milizia',
		defenses1long: 'Ci sono degli uomini e donne abili con armi logore pronti per essere chiamati alle armi, ma nessuna forza militare permanente.',
		defenses2: 'Sorveglianti',
		defenses2long: 'Ci sono alcuni sorveglianti che stanno di guardia per individuare eventuali minacce e risolvono le piccole contese, ma il loro compito principale è di convocare la milizia.',
		defenses3: 'Guardia',
		defenses3long: 'Ci sono sempre dei difensori armati, in totale meno di 100 (o equivalente). C’è sempre almeno una pattuglia armata che gira per l’insediamento.',
		defenses4: 'Guarnigione',
		defenses4long: 'Ci sono sempre dei difensori armati, in totale 100–300 (o equivalente). C’è più di una pattuglia armata alla volta.',
		defenses5: 'Battaglione',
		defenses5long: 'Fino a 1.000 difensori armati (o equivalente). L’insediamento ha anche delle fortificazioni con uomini di guardia.',
		defenses6: 'Legione',
		defenses6long: 'L’insediamento è difeso da migliaia di soldati armati (o equivalente). Le difese dell’insediamento incutono paura.',

		steadingvillage: 'Villaggio',
		steadingvillagebutton: 'Crea un villaggio',
		steadingvillagetext: 'I villaggi sono gli insediamenti più piccoli. Sono solitamente isolati, lontano dalle strade più grandi. Se sono fortunati possono radunare degli uomini per difendersi, ma solitamente si tratta di villici che impugnano torce e forconi. Un villaggio si trova vicino a qualche risorsa facilmente sfruttabile: terra fertile, abbondanza di pesci, una vecchia foresta, una miniera. Potrebbe esserci un negozio di sorta ma è più probabile che gli abitanti commercino direttamente tra loro. I soldi scarseggiano.',

		optionvillage0: 'Il villaggio è in un luogo naturalmente difendibile',
		optionvillage1: 'Il villaggio ha abbondanti risorse su cui appoggiarsi',
		optionvillage2: 'Il villaggio è sotto la protezione di un altro insediamento',
		optionvillage3: 'Il villaggio è situato su una strada importante',
		optionvillage4: 'Il villaggio è costruito attorno alla torre di un mago',
		optionvillage5: 'Il villaggio ha abbondanti risorse su cui appoggiarsi',
		optionvillage6: 'Il villaggio è costruito su un sito d’importanza religiosa',
	}

	return labels[value] || '';
}

// it.labels = {

// }

// it.prosperityTags = [
// 	{label: 'Misera', text: ''},
// 	{label: 'Povera', text: ''},
// 	{label: 'Moderata', text: 'La maggior parte degli oggetti ordinari è reperibile. Si può trovare manodopera specializzata.'},
// 	{label: 'Benestante', text: 'Qualunque oggetto ordinario si trova in vendita. Si possono trovare i più importanti tipi di manodopera specializzata, ma la domanda per il loro lavoro è alta.'},
// 	{label: 'Ricca', text: 'Oggetti ordinari e anche più, se sai dove trovarli. Manodopera specializzata disponibile, ma a caro prezzo.'}
// ]

// it.steadings = [];

// // Village
// it.steadings.push({
// 	name: 'Villaggio',
// 	button: 'Crea un Villaggio',
// 	text: 'I villaggi sono gli insediamenti più piccoli. Sono solitamente isolati, lontano dalle strade più grandi. Se sono fortunati possono radunare degli uomini per difendersi, ma solitamente si tratta di villici che impugnano torce e forconi. Un villaggio si trova vicino a qualche risorsa facilmente sfruttabile: terra fertile, abbondanza di pesci, una vecchia foresta, una miniera. Potrebbe esserci un negozio di sorta ma è più probabile che gli abitanti commercino direttamente tra loro. I soldi scarseggiano.',
// 	options: [
// 		{
// 			label: 'Il villaggio è in un luogo naturalmente difendibile',
// 			rules: ['+sicuro', '-defense']
// 		}
// 	],
// 	initial: {
// 		prosperity: 1,
// 		population: 2,
// 		defenses: 1
// 	},
// 	current: {
// 		prosperity: 1,
// 		population: 2,
// 		defenses: 1
// 	}
// });

// // Town
// it.steadings.push({
// 	name: 'Borgo',
// 	button: 'Crea un Borgo',
// 	text: 'I borghi hanno un centinaio di abitanti. Sono quel genere di insediamento che sorge attorno a un mulino, una stazione commerciale o una locanda e solitamente hanno campi, fattorie e qualche tipo di bestiame. Potrebbero avere una milizia stabile di contadini abbastanza forti da impugnare una spada o tirare con l’arco. Nei borghi si vendono i beni fondamentali, ma nessun articolo inconsueto. Solitamente si concentrano su uno o due prodotti locali e commerciano con i viaggiatori.',
// 	options: [

// 	]
// });