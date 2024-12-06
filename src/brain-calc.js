import runGame from './gameEngine.js'; // Импортируем игровой движок

// Логика игры
const playMathGame = () => {
  // Возвращаем вопрос и правильный ответ
  return {
    question: `${Math.floor(Math.random() * 100)} + ${Math.floor(Math.random() * 100)}`,
    correctAnswer: (Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)).toString(),
  };
};

// Функция для запуска игры
const startMathGame = () => {
  runGame(playMathGame, 'calc'); // Передаем логику игры в игровой движок
};

export default startMathGame;
