function orderray(arr) {
	var ord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
	var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'numbers';

	var arrays = Object.assign([], arr);
	var clone = arrays;
	var count = clone.length;
	var final = [];

	sortingOut();

	function sortingOut() {
		var ar = 0;
		var cl = 0;

		if (type == 'numbers') {
			while (true) {
				if (ord == 'asc') {
					if (clone[cl] <= arrays[ar]) {
						ar += 1;
					} else {
						cl = ar;
						ar = 0;
					}
				} else if (ord == 'desc') {
					if (clone[cl] >= arrays[ar]) {
						ar += 1;
					} else {
						cl = ar;
						ar = 0;
					}
				}

				if (ar >= count) {
					final.push(clone[cl]);
					clone.splice(cl, 1);

					count = clone.length;
					if (clone.length == 0) break;
					ar = 0;
					cl = 0;
				}
			}
		} else if (type == 'string') {
			var control = cl;
			var countSplit = 0;
			var controlClone = [];
			var controlArrays = [];

			while (control < count) {
				countSplit = clone[control].split('').length;
				controlClone.push(countSplit);
				control++;
			}

			controlArrays = controlClone;

			while (true) {
				if (ord == 'asc') {
					if (controlClone[cl] <= controlArrays[ar]) {
						ar += 1;
					} else {
						cl = ar;
						ar = 0;
					}
				} else if (ord == 'desc') {
					if (controlClone[cl] >= controlArrays[ar]) {
						ar += 1;
					} else {
						cl = ar;
						ar = 0;
					}
				}

				if (ar >= count) {
					final.push(clone[cl]);
					clone.splice(cl, 1);
					controlClone.splice(cl, 1);

					count = controlClone.length;
					if (controlClone.length == 0) break;
					ar = 0;
					cl = 0;
				}
			}
		}
	}
	return final;
}