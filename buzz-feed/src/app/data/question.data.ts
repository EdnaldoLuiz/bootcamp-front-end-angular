import { Question } from "../model/question.model";

export const Questions: Question[] = [
  {
    id: 1,
    text: 'Qual é a capital do Brasil?',
    options: [
      { text: 'Brasília', isCorrect: true, color: '' },
      { text: 'Rio de Janeiro', isCorrect: false, color: '' },
      { text: 'São Paulo', isCorrect: false, color: '' },
      { text: 'Belém', isCorrect: false, color: '' }
    ],
    selectedOption: null,
    submitted: false,
    backgroundImage: 'url(https://images.hdqwalls.com/download/berlin-capital-of-germany-5k-ze-1920x1080.jpg)'
  },
  {
    id: 2,
    text: 'Qual é o maior oceano do mundo?',
    options: [
      { text: 'Oceano Atlântico', isCorrect: false, color: '' },
      { text: 'Oceano Índico', isCorrect: false, color: '' },
      { text: 'Oceano Antártico', isCorrect: false, color: '' },
      { text: 'Oceano Pacífico', isCorrect: true, color: '' }
    ],
    selectedOption: null,
    submitted: false,
    backgroundImage: 'url(https://th.bing.com/th/id/R.b2b69f14b8be0418ee68af36c0e9760d?rik=dGAK6TTpOdgAYQ&pid=ImgRaw&r=0)'
  },
];
