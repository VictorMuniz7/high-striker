import { Component, OnInit, inject } from '@angular/core';
import { Score } from '../../interface/score';
import { DatePipe } from '@angular/common';
import { ScoreService } from '../../service/score.service';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent implements OnInit{

  scoreList: Score[] = []

  scoreService = inject(ScoreService)
  datePipe = inject(DatePipe)

  ngOnInit(): void {
    const storedList = localStorage.getItem('scoreList')
    this.scoreList = storedList ? JSON.parse(storedList) : [];
    this.scoreService.getScore().subscribe((data) => {
      if (data !== null) {
        const timestamp = Date.now()
        let dateNow = new Date(timestamp)
        const newScore = {clicks: data, date: this.datePipe.transform(dateNow, 'dd/MM/yyyy HH:mm') ?? ''}
        this.scoreList.push(newScore)

        localStorage.setItem('scoreList', JSON.stringify(this.scoreList))
      }
    })


  }


}
