import readlineSync from 'readline-sync';
import { runGame } from './gameEngine.js'; // Импортируем игровой движок

// Функция для проверки, является ли число четным
const isEven = (number) => number % 2 === 0;

// Уникальная логика игры (игра с четными числами)
const playEvenGame = () => {
  const number = Math.floor(Math.random() * 100); // Случайное число от 0 до 99
  const correctAnswer = isEven(number) ? 'yes' : 'no'; // Правильный ответ

  const question = `Question: ${number}`; // Вопрос для пользователя

  return { question, correctAnswer }; // Возвращаем вопрос и правильный ответ
};

// Запуск игры через движок
runGame(playEvenGame);


