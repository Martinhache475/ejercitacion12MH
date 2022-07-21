var peso = prompt("Indica tu peso");
var altura = prompt("Indica tu altura"+" Usa el punto");
var CalcIMC = peso/(altura*altura);
console.log(CalcIMC);
document.write("Su IMC es:  " + CalcIMC + "<br>");
let space = ("<br>");
document.write(space);
document.write(space);
document.write(space);

if (CalcIMC <18) {document.write ("Su condicion es: " + "Bajo peso");} else {
     if (CalcIMC >18 && CalcIMC<25) {document.write ("Su condicion es: " + "Normal");} else {
          if (CalcIMC > 25) {document.write("Su condicion es: " + "Sobrepeso")}
            if (CalcIMC >30 && CalcIMC<35) {document.write(" Tipo: " + "Obesidad I")} else {
                if (CalcIMC >35 && CalcIMC<40) {document.write(" Tipo: " + "Obesidad II")} else {if (CalcIMC >41 && CalcIMC<50) {document.write(" Tipo: " + "Obesidad III")} else {
                    if (CalcIMC >50) {document.write(" Tipo: " + "Nah")}}}}}}
                