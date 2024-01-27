function traditioneleMethode()
{
    var leeftijd = prompt("Wat is de leeftijd van je hond in jaren.");
    var hondenleeftijd = leeftijd*7;
    alert('Jouw hond is ' + hondenleeftijd + ' hondenjaren oud.')
}
function snelVolwassen()
{
    var leeftijd = prompt("Wat is de leeftijd van je hond volgens de kalenderjaren.");
    var hondenleeftijd = 0
    switch(Number(leeftijd)) {
    case 0:
    	hondenleeftijd = 0;
    	break;
    case 1:
    	hondenleeftijd = 15;
    	break;
    case 2:
    	hondenleeftijd = 24;
    	break;
	default:
		hondenleeftijd = 24+(5*(leeftijd-2));
	}
	alert('Jouw hond is ' + hondenleeftijd + ' hondenjaren oud.');
}
function Science()
{
    var leeftijd = prompt("Wat is de leeftijd van je hond in jaren.");
    var hondenleeftijd = (16*Math.log(leeftijd))+31;
    alert('Jouw hond is ' + hondenleeftijd + ' hondenjaren oud.')
}
function calcLeeftijdCaro() {
	var d = new Date();
	var lengteMaanden = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	var jaarNu = d.getUTCFullYear();
	var maandNu = d.getUTCMonth()+1;
	var datumNu = d.getUTCDate();
	var jaar = jaarNu-2017;
	var maand = maandNu-4;
	var dag = datumNu-27;
	if (dag<0) {
		maand -= 1;
		dag += lengteMaanden[maandNu-1];
	}
	if (maand<0) {
		jaar -= 1;
		maand += 12;
	}
	var text = "leeftijd: " + jaar + " jaar, " + maand + " maanden en " + dag + " dagen";
	document.getElementById("Leeftijd").innerHTML = text;
}