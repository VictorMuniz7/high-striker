import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private score = new BehaviorSubject<number | null>(null)

  getScore(){
    return this.score.asObservable()
  }

  setScore(clicks: number){
    this.score.next(clicks)
  }
}
