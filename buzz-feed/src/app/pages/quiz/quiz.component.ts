// quiz.component.ts

import { Component } from '@angular/core';

interface Question {
  id: number;
  text: string;
  options: Option[];
  selectedOption: string | null;
  submitted: boolean;
}

interface Option {
  text: string;
  isCorrect: boolean;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions: Question[] = [
    {
      id: 1,
      text: 'Qual é a capital do Brasil?',
      options: [
        { text: 'Brasília', isCorrect: true },
        { text: 'Rio de Janeiro', isCorrect: false },
        { text: 'São Paulo', isCorrect: false },
        { text: 'Belém', isCorrect: false }
      ],
      selectedOption: null,
      submitted: false
    },
    {
      id: 2,
      text: 'Qual é o maior oceano do mundo?',
      options: [
        { text: 'Oceano Atlântico', isCorrect: false },
        { text: 'Oceano Índico', isCorrect: false },
        { text: 'Oceano Antártico', isCorrect: false },
        { text: 'Oceano Pacífico', isCorrect: true }
      ],
      selectedOption: null,
      submitted: false
    },
    // Adicione mais perguntas conforme necessário
  ];

  currentQuestion: number = 1;

  selectOption(question: Question, selectedOption: string) {
    if (!question.submitted) {
      question.selectedOption = selectedOption;

      // Avaliação do quiz
      if (question.selectedOption === question.options.find(option => option.isCorrect)?.text) {
        console.log(`Pergunta ${question.id}: Resposta correta!`);
      } else {
        console.log(`Pergunta ${question.id}: Resposta incorreta. A resposta correta é ${question.options.find(option => option.isCorrect)?.text}.`);
      }

      question.submitted = true;

      // Avançar para a próxima pergunta
      this.currentQuestion++;
    }
  }

  allQuestionsSubmitted(): boolean {
    return this.questions.every(question => question.submitted);
  }
}
