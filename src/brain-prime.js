console.log ('Answer "yes" if given number is prime. Otherwise answer "no".');
// Функция для проверки простоты числа
const isPrime = (number) => {
  if (number <= 1) {
    return false; // Числа меньше или равные 1 не простые
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false; // Число делится на i, значит оно не простое
    }
  }
  return true; // Число простое
};

// Логика игры для проверки простоты числа
const primeGameLogic = () => {
  // Генерация случайного числа
  const question = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question: `${question}`, correctAnswer }; // Возвращаем вопрос и правильный ответ
};

// Экспортируем только логику игры
export default primeGameLogic;
