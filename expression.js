// A gene that encodes a polypeptide is expressed in two steps. In this process,
// information flows from DNA --> RNA --> protein, a directional relationship
// known as the central dogma of molecular biology.

const transcription = require('./transcription');
const translation = require('./translation');
const sickleCellAnemia = require('./genetic-information/mutation');
let HBB_GENE = require('./genetic-information/dna');

const geneExpression = (gene) => {
	let mutation = sickleCellAnemia(gene);
	if (mutation) {
		gene = mutation;
	}
	let count = 0;
	let mRna = transcription(gene);
	let protein = translation(mRna).split('');
	return protein.reduce((x, y) => {
		count++;
		if (count == 1 || count == protein.length || count == protein.length - 1) {
			return x + '';
		} else {
			return x + y;
		}
	}, '');
};

const haemoglobinSubunitBeta = geneExpression(HBB_GENE);
console.log(haemoglobinSubunitBeta);
if (haemoglobinSubunitBeta.split('-*-')[5] == 'val')
	console.log('Patient has Sickle Cell Anemia.');
