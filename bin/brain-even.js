#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функция для проверки, является ли число четным
const isEven = (number) => number % 2 === 0;

// Приветствие и запрос имени пользователя
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

// Основная логика игры
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// Функция для игры
const playGame = () => {
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
      return; // Завершаем игру, если был неправильный ответ
    }
  }

  // Победное сообщение после 3 правильных ответов
  console.log(`Congratulations, ${name}!`);
};

// Запуск игры
playGame();
