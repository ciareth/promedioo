//Calcular el primedio de 4 notas, redondeando a un valor entero
alert("Ingrese el valor de las 4 notas para sacar el promedio");
let n1 = parseFloat(prompt("Primera Nota: "));
let n2 = parseFloat(prompt("Primera Nota: "));
let n3 = parseFloat(prompt("Primera Nota: "));
let n4 = parseFloat(prompt("Primera Nota: "));

promedio = (n1+n2+n3+n4)/4;
document.write("El promedio es: ", Math.round(promedio),"%");