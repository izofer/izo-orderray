const expect   = require('chai').expect;
const orderray = require('..').default;

describe('# Orderray: organize an array ascendant and descendant - numbers or string', function(){
	it('1 - Organize an array of numbers ascendant - use defaults', function(){
		const result = orderray([2, 4, 3, 6, 5, 1, 9, 7, 8, 10]);
		expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

	it('2 - Organize an array of numbers ascendant - use 1 parameter and 1 default',function(){
		const result = orderray([2, 4, 3, 6, 5, 1, 9, 7, 8, 10],'asc');
		expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

	it('3 - Organize an array of numbers ascendant - use 2 parameters',function(){
		const result = orderray([2, 4, 3, 6, 5, 1, 9, 7, 8, 10],'asc','numbers');
		expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

	it('4 - Organize an array of numbers descendant - use 1 parameter and 1 default',function(){
		const result = orderray([2, 4, 3, 6, 5, 1, 9, 7, 8, 10],'desc');
		expect(result).to.deep.equal([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
	});

	it('5 - Organize an array of numbers descendant - use 2 parameters',function(){
		const result = orderray([2, 4, 3, 6, 5, 1, 9, 7, 8, 10],'desc','numbers');
		expect(result).to.deep.equal([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
	});

	it('6 - Organize an array of string ascendant - use 2 parameters',function(){
		const result = orderray(['bird','spider','fly','elephant'],'asc','string');
		expect(result).to.deep.equal(["fly", "bird", "spider", "elephant"]);
	});

	it('7 - Organize an array of string descendant - use 2 parameters',function(){
		const result = orderray(['bird','spider','fly','elephant'],'desc','string');
		expect(result).to.deep.equal(["elephant", "spider", "bird", "fly"]);
	});

});