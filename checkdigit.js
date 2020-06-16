function calculCheckDigit(){
var input = document.getElementById("input").value;
var numberConvert = (input).toString();
var numberSize = numberConvert.length;
var divid;
var modul;
var result;

if (input > 0) {

	while (numberSize > 1) {
			divid = Math.trunc(input/10);
			modul = input%10;
			result = divid + modul;
			input = result;
			numberConvert = input.toString();
			numberSize = numberConvert.length;    
	}
	alert("le résultat est : "+ result);

} else {
	alert("Il fallait entrer un nombre positif. Rééssayez ! :-) ");
}


}