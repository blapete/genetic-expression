// A gene that encodes a polypeptide is expressed in two steps. In this process,
// information flows from DNA --> RNA --> protein, a directional relationship
// known as the central dogma of molecular biology.

const HBB_GENE = require("./dna");
const transcription = require("./transcription");
const translation = require("./translation");

const geneExpression = (gene) => {
  let count = 0;
  let mRna = transcription(gene);
  let protein = translation(mRna).split("");
  let formattedProtein = protein.reduce((x, y) => {
    count++;
    if (count == 1 || count == protein.length || count == protein.length - 1) {
      return x + "";
    } else {
      return x + y;
    }
  }, "");
  return formattedProtein;
};

const haemoglobinSubunitBeta = geneExpression(HBB_GENE);
console.log(haemoglobinSubunitBeta);
