//1. Напишите функцию, которая выводит ваше имя и фамилию.
// functionName("Erjan", "Kydyrov") // My  name is Erjan Kydyrov
function showName(name, surname){
  console.log("My name is " + name + ' ' + surname)
}
showName('Baiyr', 'Emilov');

//2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
// functionName(height, radius) // Объем конуса равен ...
function coneVolume(height, radius){
  cVolume =  ((height * 3.14 * (radius) * 2) / 3);
  console.log("Объем конуса равен - " + cVolume);
}
coneVolume(9, 3);

//3. Напишите функцию, которая принимает строку и возвращает ее длину.
// functionName(" ... ") // Длина строки равна ...
function massage(a){
  console.log("Длина строки равна - " + a.length);
}
massage("How are you?");

// 4. Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.
// functionName(num) // Число - четное || Число - нечетное
let example8 = [45, 33, 11, 60, 3, 10, 15];
for (let i = 0; example8.length > i; i++) {
  let num = example8[i];
  if (num % 2 === 0) {
  console.log(num + " - Odd");
  }
  else {
    console.log(num + " - Even");
  }
}


//5
function san(a){
  total = a ** 2;
  console.log("квадрат  этого числа равен " + total);
}
san(4);

//6
function num(b){
  console.log("корень этого числа равень " + Math.sqrt(b));
}
num(9);

//7
function perimeterofaPentagon(a, b, c, d, e) {
  perimeter = a + b + c + d + e;
  console.log("Периметр пятиугольника равен -  " + perimeter);
}
perimeterofaPentagon(3, 4, 2, 6, 8);

//8
let number1 = 33
for(let i = 0; i <= number1; i++){
  if (i % 3 === 0) {
    console.log(i);
    }
}

//9
let number2 = 10;
for (let i = 0; i <= number2; i++){
  result = i % 2; 
  console.log(result);
}

//10

//11

//12
for (a = 0; a <= 20; a++ ) {
  if (a % 2 === 0) {
    console.log(a);
  }
}

//13
for (b = 0; b <= 15; b++){
  if (b % 2 ==! 0) {
    console.log(b);
  }
}

//14
let sans = ["Baiyr", "Adil", "Mirbek", "Arzymat"];
console.log(sans);