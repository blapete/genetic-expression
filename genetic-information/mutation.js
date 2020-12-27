const sickleCellAnemia = (gene) => {
	if (Math.round(Math.random() - 0.3)) {
		gene = gene.split('');
		gene.splice(69, 1, 'U');
		return gene.join('');
	}
};

module.exports = sickleCellAnemia;
