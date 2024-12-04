#!/usr/bin/env node

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
    const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);

    // Проверка ответа пользователя
    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      process.exit(0); // Завершаем игру при неправильном ответе
    }
  }

  // Победное сообщение после 3 правильных ответов
  console.log(`Congratulations, ${userName}! You won the game!`);
  process.exit(0); // Явное завершение игры после победы
};

// Запуск игры
startGame();

// Экспорт функции startGame
export default startGame;

