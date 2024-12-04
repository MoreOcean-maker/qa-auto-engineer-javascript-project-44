import readlineSync from 'readline-sync';

// Функция для проверки, является ли число четным
const isEven = (number) => number % 2 === 0;

// Функция приветствия и запроса имени
const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Функция основной логики игры
const playGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;

  // Игра продолжается до тех пор, пока не будет 3 правильных ответа подряд
  while (correctAnswers < 3) {
    const number = Math.floor(Math.random() * 100); // Случайное число от 0 до 99
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ').toLowerCase();

    // Проверка корректности ответа
    if ((answer === 'yes' && isEven(number)) || (answer === 'no' && !isEven(number))) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(number) ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      process.exit(1); // Завершаем игру с кодом ошибки (неправильный ответ)
    }
  }

  // Победное сообщение после 3 правильных ответов
  console.log(`Congratulations, ${name}!`);
  process.exit(0); // Завершаем игру успешно после 3 правильных ответов
};

// Функция для начала игры
const startGame = () => {
  const name = greetUser(); // Приветствие и получение имени пользователя
  playGame(name); // Запуск основной логики игры
};

// Проверка: выполняется ли скрипт напрямую или импортируется как модуль
if (import.meta.url === `file://${process.argv[1]}`) {
  startGame();
}

// Экспорт функции startGame
export default startGame;
