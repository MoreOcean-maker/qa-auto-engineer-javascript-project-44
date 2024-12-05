import runGame from './gameEngine.js'; // Импортируем игровой движок

// Функция для проверки, является ли число четным
const isEven = (number) => number % 2 === 0;

// Уникальная логика игры (игра с четными числами)
const playEvenGame = () => {
  const number = Math.floor(Math.random() * 100); // Случайное число от 0 до 99
  const correctAnswer = isEven(number) ? 'yes' : 'no'; // Правильный ответ
  
  // Добавим вывод для отладки
  console.log('playEvenGame output:', { question: number, correctAnswer });

  return { question: number, correctAnswer }; // Возвращаем вопрос и правильный ответ
};

// Описание игры
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// Функция для запуска игры
const startEvenGame = () => {
  console.log(description); // Выводим описание игры
  runGame(playEvenGame); // Передаем логику игры в игровой движок
};

export default startEvenGame;
