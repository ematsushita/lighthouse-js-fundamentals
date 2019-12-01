const lastIndexOf = function (array, value) {
	let final = ""; 
	for (var i = 00; i <= array.length; i++) {
		if (array[i] === value) {
			final = i;
	}
	}
	return final;
}

function lastIndexOf (array, value) {
  var lastIndex;

  for (var i = 0; i < array.length; i++) {
    if (array[i] == value)
      lastIndex = i;
  }

  if (lastIndex === undefined) lastIndex = -1;
  return lastIndex;

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
