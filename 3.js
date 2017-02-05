var fs = require('fs');

// helper functions
var count = 0;
var keywordToFind = 'TCP';

fs.readFile('./input.txt', 'utf8', function(err,data) {
	if (err) {
		return console.log('file not found');
	}
	//console.log(data);

	// fake map reduce calls
	var lines = data.split('\n');
	for (var i=0;i<lines.length;i++) {
		map(i, lines[i])
	}
	for (var key in context.map) {
		reduce(key, context.read(key));
	}
	// OUTPUT ALL KEYS AND THEIR FINAL COUNT
	//for (var key in result.map) {
	//	console.log(key, result.read(key))
	//}
	printResult();
});

var context = {
	map: {},
	
	read: function (k) {
       	return context.map.filter(function(val) {
  			return val.key === context.map[k].key
		}).length
    }
}

var result = {
	map: {},
}

function map(key, value) {

	if (!(context.map.constructor === Array)) {
		context.map = [];
	}

	var pattern = /\w+/g,
        string = value.toLowerCase(),
        matchedWords = string.match( pattern );

	for (var i in matchedWords) {
		context.map.push({
    		key:   matchedWords[i],
    		value: 1
		});
	}
}

function reduce(key, values) {

	if (!(result.map.constructor === Array)) {
		result.map = [];
	}

	result.map[context.map[key].key] = values;

	if (context.map[key].key == keywordToFind.toLowerCase()) {
		count = values;
	}
}

function printResult() {
	console.log(count);
}