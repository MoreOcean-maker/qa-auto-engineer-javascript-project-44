#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функция для проверки простоты числа
const isPrime = (number) => {
  if (number <= 1) {
    return false; // Числа меньше или равные 1 не простые
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Число делится на i, значит оно не простое
    }
  }
  return true; // Число простое
};

// Функция для начала игры
const startGame = () => {
  console.log('Welcome to the Brain Games!');
  
  // Запрос имени пользователя
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswers = 0;
  let wrongAnswers = 0;

  while (correctAnswers < 3 && wrongAnswers < 1) {
    // Генерация случайного числа
    const question = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    // Вопрос пользователю
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    // Проверка ответа пользователя
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      wrongAnswers += 1;
    }
  }

  // Завершаем игру в зависимости от исхода
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log('Game over!');
  }
};

// Запуск игры
startGame();

// Экспорт функции startGame
export default startGame;

