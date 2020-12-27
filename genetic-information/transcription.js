// Transcription, first step in gene expression: the process of copying out the DNA sequence of a gene in the similar alphabet of RNA.

// Performed by enzymes called RNA polymerases, which link nucleotides to form an RNA strand - from a DNA template.

// 1. Initiation: RNA polymerase binds to a sequence of DNA called the promoter

// 2. Elongation: One strand of DNA, the template strand, acts as a template for RNA polymerase. The RNA transcript carries the same information as the non-template (coding) strand of DNA, but it contains the base uracil (U) instead of thymine (T).

// 3. Termination: Sequences called terminators signal that the RNA transcript is complete. Once they are transcribed, they cause the transcript to be released from the RNA polymerase.

//-----------------------------------------------------------------------------------------------------------------------------------

const intronScanner = require("./intron");

const rnaPolymerase = (nucleotide) => {
  return nucleotide.replace(/T/g, "U");
};

const splicing = (rnaConverted) => {
  // use regEx to splice by the nucleotides at the beginning and end of the introns
  let start = rnaConverted.match(intronScanner.start);
  let end = rnaConverted.match(intronScanner.end);

  if (!start || !end || start.length !== end.length) {
    console.error("Splicing Error");
    return rnaConverted;
  }

  let counter = 0;
  // adjust to get the full exon
  do {
    let intronStart = rnaConverted.indexOf(start[counter]) + 1;
    let intronEnd = rnaConverted.indexOf(end[counter]) + 7;
    rnaConverted =
      rnaConverted.slice(0, intronStart) + rnaConverted.slice(intronEnd);
    counter++;
  } while (counter < start.length);

  return rnaConverted;
};

const transcription = (dna) => {
  let rna = rnaPolymerase(dna);
  let mRna = splicing(rna);
  return mRna;
};

module.exports = transcription;
