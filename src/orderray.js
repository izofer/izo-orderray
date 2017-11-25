export default function orderray(arr, ord = 'asc', type = 'numbers')
{	
	let arrays = Object.assign([], arr);
	let clone  = arrays;
	let count  = clone.length;
	let final  = [];

	sortingOut();

	function sortingOut()
	{	
		let ar = 0;
		let cl = 0;

		if(type == 'numbers')
		{	
			while(true)
			{
				if(ord == 'asc')
				{
					if(clone[cl] <= arrays[ar])
					{
						ar += 1;
					}
					else
					{
						cl = ar;
						ar = 0;
					}
				}
				else if(ord == 'desc')
				{
					if(clone[cl] >= arrays[ar])
					{
						ar += 1;
					}
					else
					{
						cl = ar;
						ar = 0;
					}
				}

				if(ar >= count)
				{
					final.push(clone[cl]);
					clone.splice(cl, 1);

					count = clone.length;
					if(clone.length == 0) break;
					ar 	  = 0;
					cl    = 0;
				}
			}
		}
		else if(type == 'string')
		{
			let control       = cl;
			let countSplit    = 0;
			let controlClone  = [];
			let controlArrays = [];
			
			while(control < count)
			{
				countSplit  = clone[control].split('').length;
				controlClone.push(countSplit);
				control++;
			}

			controlArrays = controlClone;

			while(true)
			{
				if(ord == 'asc')
				{
					if(controlClone[cl] <= controlArrays[ar])
					{
						ar += 1;
					}
					else
					{
						cl = ar;
						ar = 0;
					}
				}
				else if(ord == 'desc')
				{
					if(controlClone[cl] >= controlArrays[ar])
					{
						ar += 1;
					}
					else
					{
						cl = ar;
						ar = 0;
					}
				}

				if(ar >= count)
				{
					final.push(clone[cl]);
					clone.splice(cl, 1);
					controlClone.splice(cl, 1);

					count = controlClone.length;
					if(controlClone.length == 0) break;
					ar 	  = 0;
					cl    = 0;
				}
			}
		}
	}
	return final;
}