console.log('Find the greatest common divisor of given numbers.');

// Логика игры для нахождения НОД
const gcdGameLogic = () => {
  // Генерация случайных чисел
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;

  // Функция для нахождения НОД
  const gcd = (a, b) => {
    let x = a;  // Используем локальные переменные
    let y = b;

    while (y !== 0) {  // Используем y, а не num2
      const temp = y;
      y = x % y;  // Используем x и y для вычислений
      x = temp;
    }

    return x;  // Возвращаем результат НОД
  };

  const correctAnswer = gcd(num1, num2);  // Нахождение НОД
  const question = `${num1} ${num2}`;  // Формирование вопроса

  return { question, correctAnswer: correctAnswer.toString() };
};

// Экспортируем только логику игры
export default gcdGameLogic;

