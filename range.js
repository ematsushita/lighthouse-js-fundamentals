const range = function(start, end, step) {
	let final = [];
	if (start === undefined || end == undefined || step === undefine){
		return final};
	if (start > end) {
		return final};
	if (step < 0) {
		return final};
	for (var i = 0; i <=((end - start)/ step); i++) {
		final.push(start + step * i);
	}
	return final;
}
