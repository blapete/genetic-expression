// mRNA is "decoded" to build a protein (or a chunk/subunit of a protein) that contains a specific series of amino acids.

// Ribosomes are the structures where polypeptides (proteins) are built

// tRNAs, are molecular "bridges" that connect mRNA codons to the amino acids they encode.

const START_CODON = require('../genetic-information/start');
const STOP_CODON = require('../genetic-information/stop');
const CODONS = require('../genetic-information/codons');

const translation = (mRna) => {
	let peptide = [];
	let translating = false;

	for (let i = 0; i < mRna.length; i += translating ? 3 : 1) {
		let codon = mRna.slice(i, i + 3);
		if (!translating) {
			if (codon === START_CODON) {
				translating = true;
				continue;
			} else {
				continue;
			}
		}
		let aminoAcid = CODONS[codon];
		if (aminoAcid === STOP_CODON) break;
		peptide.push(aminoAcid.key);
	}

	return peptide.join('');
};

module.exports = translation;
