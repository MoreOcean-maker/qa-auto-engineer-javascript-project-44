#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функция для нахождения НОД с использованием алгоритма Евклида
const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// Функция для начала игры
const startGame = () => {
  console.log('Welcome to the Brain Games!');
  
  // Запрос имени пользователя
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;
  const roundsToWin = 3;  // Количество правильных ответов для победы

  while (correctAnswersCount < roundsToWin) {
    // Генерация случайных чисел
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    
    // Вопрос пользователю
    const correctAnswer = gcd(num1, num2);
    const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);

    // Проверка ответа пользователя
    if (parseInt(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;  // Завершаем игру при неправильном ответе
    }
  }

  // Проверяем, завершена ли игра победой или поражением
  if (correctAnswersCount === roundsToWin) {
    console.log(`Congratulations, ${userName}! You won the game!`);
  }
};

// Запуск игры
startGame();

// Экспорт функции startGame
export default startGame;

