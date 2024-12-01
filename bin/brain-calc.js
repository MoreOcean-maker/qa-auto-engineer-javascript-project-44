#!/usr/bin/env node

import readlineSync from 'readline-sync';

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

// Приветствие и запрос имени пользователя
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

// Основная логика игры
console.log('What is the result of the expression?');

// Функция для игры
const playGame = () => {
  let correctAnswers = 0;

  // Игра продолжается до тех пор, пока не будет 3 правильных ответа подряд
  while (correctAnswers < 3) {
    const { question, correctAnswer } = generateQuestion(); // Генерация вопроса и ответа
    console.log(`Question: ${question}`);

    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10); // Ввод ответа от пользователя

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // Завершаем игру, если был неправильный ответ
    }
  }

  // Победное сообщение после 3 правильных ответов
  console.log(`Congratulations, ${name}!`);
};

// Запуск игры
playGame();
