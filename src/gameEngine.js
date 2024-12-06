import readlineSync from 'readline-sync';

// Функция для приветствия и запроса имени
const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Основной игровой движок с логикой запуска раундов и проверки ответов
const runGame = (gameLogic) => {
  const name = greetUser(); // Приветствие и получение имени пользователя
  const roundsCount = 3; // Количество раундов

  for (let i = 0; i < roundsCount; i += 1) {
    // Запуск уникальной логики игры
    const gameData = gameLogic();

    // Проверяем, что gameLogic возвращает объект с корректными полями
    if (!gameData || !gameData.question || !gameData.correctAnswer) {
      console.log('Error: gameLogic must return an object with "question" and "correctAnswer" properties.');
      process.exit(1); // Завершаем игру с ошибкой
    }

    const { question, correctAnswer } = gameData;

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();

    // Проверка ответа пользователя
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // Завершаем игру при ошибке
    }
  }

  // Победное сообщение после прохождения всех раундов
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
