let tree = +prompt ("Введите число:")
result='';
symbol='';
for (i=0; i<tree;i++){
    symbol+="*";
    result+='\n' + symbol;
}
alert (result)

let xMasTree = prompt("Введите число:");
let res = "";
for (var i = 0, symb = 1; i < xMasTree; i++, symb+=2) {
	for (var j = 0; j < xMasTree - i - 1; j++) {
		res += " ";
	}
	for (var j = 0; j < symb; j++) {
		res += "*";
	}
	for (var j = 0; j < xMasTree - i - 1; j++) {
		res += " ";
	}
	res += "\n";
}
alert(res)