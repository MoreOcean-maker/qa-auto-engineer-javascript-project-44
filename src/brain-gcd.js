import runGame from './gameEngine.js'; 

// Логика игры для нахождения НОД
const gcdGameLogic = () => {
  // Генерация случайных чисел
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;

  // Функция для нахождения НОД
  const gcd = (a, b) => {
    let num1 = a;
    let num2 = b;

    while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }

    return num1; // Возвращаем результат НОД
  };

  const correctAnswer = gcd(num1, num2);
  const question = `${num1} ${num2}`; // Формируем вопрос

  return { question, correctAnswer: correctAnswer.toString() };
};

// Запуск игры с использованием основной логики
runGame(gcdGameLogic);
