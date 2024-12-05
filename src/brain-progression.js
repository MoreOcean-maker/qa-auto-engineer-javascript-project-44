
// Функция для генерации прогрессии
const generateProgression = () => {
  const start = Math.floor(Math.random() * 10) + 1; // начальное число прогрессии
  const step = Math.floor(Math.random() * 5) + 1; // шаг прогрессии
  const length = Math.floor(Math.random() * 6) + 5; // длина прогрессии от 5 до 10
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const hiddenIndex = Math.floor(Math.random() * length); // случайная позиция для пропавшего числа
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..'; // заменяем пропавшее число на ".."

  return {
    progression: progression.join(' '),
    hiddenNumber,
  };
};

// Логика игры для поиска пропавшего числа в прогрессии
const progressionGameLogic = () => {
  const { progression, hiddenNumber } = generateProgression();
  const question = progression; // Прогрессия - это вопрос
  const correctAnswer = hiddenNumber.toString(); // Правильный ответ - пропавшее число

  return { question, correctAnswer }; // Возвращаем вопрос и правильный ответ
};

// Описание игры
const description = 'What number is missing in the progression?';

// Экспортируем функцию логики игры для использования в runGame
export default progressionGameLogic;


