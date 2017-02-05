// Input
var digits = 123456789;
console.log('start', digits);

var Combinatorics = require('js-combinatorics');						//	npm i js-combinatorics	//
var math = require('mathjs');											//	npm install mathjs		//

digits = digits.toString();

digits_len = digits.length;

baseN = Combinatorics.baseN(['+','-',''], digits_len - 1).toArray();

for (i = 0; i < baseN.length; i++) {
    var arr = '';
    var v = 0;
    for (j = 0; j < digits_len - 1; j++) {
    	arr = arr + digits[j] + baseN[i][j];
    }
    arr = arr + digits[digits_len - 1];
    v = math.eval(arr);
    if (v == 100) {
    	console.log(arr, ' = ', v);
	}
}    

console.log(digits);