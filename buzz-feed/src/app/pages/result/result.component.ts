import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  totalQuestions: number = 0;
  correctAnswers: number = 0;
  incorrectAnswers: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.totalQuestions = Number(params['totalQuestions']);
      this.correctAnswers = Number(params['correctAnswers']);
      this.incorrectAnswers = Number(params['incorrectAnswers']);
    });
  }
}
