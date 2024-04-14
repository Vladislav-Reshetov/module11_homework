function isPrime(num) {
num = +prompt ('Введите значение');
if(num === null || num === "") {
    return 'Вы отменили ввод';
}
if(isNaN (num)) {
  return 'Упс, кажется, вы ошиблись';
} 
  if (num <= 1 || num >= 1000) {
    return 'Число должно быть от 1 до 1000';
}else {
  let n = Math.sqrt (num);
  for (let i = 2; i <=n; i++) {
    if (num % i === 0) {
      return "составное число";
    }
  }
  return "простое число";
  }
}
console.log (isPrime());