const CRISPR = {
  start: /GGU(?:G|U)(?:G|A)GU/g,
  end: /CCC(?:U|A)(?:U|C)AG/g,
};

module.exports = CRISPR;
