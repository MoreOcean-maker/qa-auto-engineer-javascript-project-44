import readlineSync from 'readline-sync';
import runGame from './gameEngine.js'; // Импортируем игровой движок

// Функция для генерации случайного выражения и его результата
const generateQuestion = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  let question = '';
  let correctAnswer = 0;

  // Генерация вопроса и вычисление правильного ответа
  switch (operator) {
    case '+':
      question = `${num1} + ${num2}`;
      correctAnswer = num1 + num2;
      break;
    case '-':
      question = `${num1} - ${num2}`;
      correctAnswer = num1 - num2;
      break;
    case '*':
      question = `${num1} * ${num2}`;
      correctAnswer = num1 * num2;
      break;
    default:
      break;
  }

  return { question, correctAnswer };
};

// Описание игры
const description = 'What is the result of the expression?';

// Логика игры
const playMathGame = () => {
  const { question, correctAnswer } = generateQuestion(); // Генерация вопроса и ответа
  // Возвращаем вопрос и правильный ответ для проверки в игровом движке
  return { question, correctAnswer };
};

// Функция для запуска игры
const startMathGame = () => {
  console.log(description); // Выводим описание игры
  runGame(playMathGame); // Передаем логику игры в игровой движок
};

export default startMathGame;
