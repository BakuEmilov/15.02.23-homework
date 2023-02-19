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


