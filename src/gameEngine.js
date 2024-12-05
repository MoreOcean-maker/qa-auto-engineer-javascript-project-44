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
  let correctAnswers = 0;

  // Игра продолжается до тех пор, пока не будет 3 правильных ответа подряд
  while (correctAnswers < 3) {
    // Запуск уникальной логики игры, передаваемой через gameLogic
    const { question, correctAnswer } = gameLogic(); // Получаем вопрос и правильный ответ для текущего раунда
    
    if (!question || !correctAnswer) {
      console.log('Error: gameLogic must return an object with question and correctAnswer.');
      process.exit(1);
    }

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ').toLowerCase();

    // Проверка корректности ответа
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      process.exit(1); // Завершаем игру с кодом ошибки (неправильный ответ)
    }
  }

  // Победное сообщение после 3 правильных ответов
  console.log(`Congratulations, ${name}!`);
  process.exit(0); // Завершаем игру успешно
};

export default runGame;
