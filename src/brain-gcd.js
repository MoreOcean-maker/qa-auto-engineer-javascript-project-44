import readlineSync from 'readline-sync';

// Функция для нахождения НОД с использованием алгоритма Евклида
const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
};

// Функция для начала игры
const startGame = () => {
  console.log('Welcome to the Brain Games!');

  // Запрос имени пользователя
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;
  const roundsToWin = 3; // Количество правильных ответов для победы

  while (correctAnswersCount < roundsToWin) {
    // Генерация случайных чисел
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    // Вопрос пользователю
    const correctAnswer = gcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const userInput = readlineSync.question('Your answer: ');

    // Проверка валидности ввода
    const userAnswer = parseInt(userInput, 10);

    // Если ввод неверный, повторяем запрос
    if (Number.isNaN(userAnswer)) {
      console.log('Please enter a valid number.');
      
      return startGame(); // Рекурсивный вызов игры для нового ввода
    }

    // Проверка ответа пользователя
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return; // Завершаем игру после неправильного ответа
    }
  }

  // Победное сообщение после 3 правильных ответов
  console.log(`Congratulations, ${userName}! You won the game!`);
};

// Проверка: выполняется ли скрипт напрямую
if (import.meta.main) {
  startGame();
}

export default startGame;
