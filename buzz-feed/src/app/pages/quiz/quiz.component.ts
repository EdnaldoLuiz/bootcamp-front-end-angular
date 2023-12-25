import { Questions } from './../../data/question.data';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  public constructor(private router: Router) { }
  questions = Questions;

  currentQuestion: number = 1;

  selectOption(question: Question, selectedOption: string) {
    if (!question.submitted) {
      question.selectedOption = selectedOption;

      const selectedOptionObject = question.options.find(option => option.text === selectedOption);

      if (selectedOptionObject && selectedOptionObject.isCorrect) {
        console.log(`Pergunta ${question.id}: Resposta correta!`);
      } else {
        console.log(`Pergunta ${question.id}: Resposta incorreta. A resposta correta é ${question.options.find(option => option.isCorrect)?.text}.`);
      }

      question.submitted = true;
      this.currentQuestion++;
    }
  }

  allQuestionsSubmitted(): boolean {
    return this.questions.every(question => question.submitted);
  }

  assignColors() {
    this.questions.forEach(question => {
      question.options.forEach((option, index) => {
        option.color = this.generateColor(index);
      });
    });
  }

  generateColor(index: number): string {
    const colors = ['red', 'blue', 'orange', 'green'];
    return colors[index % colors.length];
  }

  navigateToResults() {
    this.router.navigate(['/resultado'], {
      queryParams: {
        totalQuestions: this.questions.length,
        correctAnswers: this.calculateCorrectAnswers(),
        incorrectAnswers: this.calculateIncorrectAnswers()
      }
    });
  }



  calculateCorrectAnswers(): number {
    return this.questions.reduce((count, question) => {
      const correctOption = question.options.find(option => option.isCorrect);
      return count + (question.selectedOption === correctOption?.text ? 1 : 0);
    }, 0);
  }

  calculateIncorrectAnswers(): number {
    return this.questions.length - this.calculateCorrectAnswers();
  }

  ngOnInit() {
    this.assignColors();
  }
}
