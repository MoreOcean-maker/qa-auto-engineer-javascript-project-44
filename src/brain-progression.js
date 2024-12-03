import readlineSync from 'readline-sync';

// Функция для генерации прогрессии
const generateProgression = () => {
  const start = Math.floor(Math.random() * 10) + 1; // начальное число прогрессии
  const step = Math.floor(Math.random() * 5) + 1; // шаг прогрессии
  const length = Math.floor(Math.random() * 6) + 5; // длина прогрессии от 5 до 10
  const progression = [];

  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const hiddenIndex = Math.floor(Math.random() * length); // случайная позиция для пропавшего числа
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..'; // заменяем пропавшее число на ".."

  return {
    progression: progression.join(' '),
    hiddenNumber,
  };
};

// Функция для начала игры
const startGame = () => {
  console.log('Welcome to the Brain Games!');
  
  // Запрос имени пользователя
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  let correctAnswers = 0;
  const roundsToWin = 3; // Количество правильных ответов для победы

  while (correctAnswers < roundsToWin) {
    // Генерация прогрессии
    const { progression, hiddenNumber } = generateProgression();
    
    // Вопрос пользователю
    const userAnswer = readlineSync.question(`Question: ${progression}\nYour answer: `);

    // Проверка ответа пользователя
    if (parseInt(userAnswer) === hiddenNumber) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
      console.log(`Game over, ${userName}! Let's try again.`);
      process.exit(0);  // Завершаем игру при неправильном ответе
    }
  }

  // Победное сообщение после 3 правильных ответов
  console.log(`Congratulations, ${userName}! You won the game!`);
  process.exit(0);  // Явное завершение игры после победы
};

// Запуск игры
startGame();

// Экспорт функции startGame
export default startGame;

