import { Component, inject } from '@angular/core';
import { ScoreService } from '../../service/score.service';

@Component({
  selector: 'app-highstriker',
  standalone: true,
  imports: [],
  templateUrl: './highstriker.component.html',
  styleUrl: './highstriker.component.scss'
})
export class HighstrikerComponent {

  startTimerInterval: any
  count: number = 3

  gameTimeInterval: any
  timer: number = 1

  screen: number = 1

  clicks: number = 80

  scoreService = inject(ScoreService)

  start(){
    this.screen = 2
    this.startTimerInterval = setInterval(() => {
      if(this.count === 1){
        clearInterval(this.startTimerInterval)
        this.screen = 3

        this.gameTimeInterval = setInterval(() => {
          if(this.timer <= 0){
            clearInterval(this.gameTimeInterval)
            this.screen = 4
            if(this.clicks >= 82){
              setTimeout(() => {
                this.playSound()
              }, 500)
            }
          }
          this.timer -= 0.01
        }, 10)
      }
      this.count--
    }, 1000)
  }

  listenClicks(){
    this.clicks += 1
  }

  playSound(){
    const audio = new Audio('https://raw.githubusercontent.com/VictorMuniz7/high-striker/tree/gh-pages/assets/ram-bell-sound.mp3')
    audio.volume = 0.2
    audio.play();
  }

  reset(){
    this.scoreService.setScore(this.clicks)
    this.count = 3
    this.timer = 8
    this.screen = 1
    this.clicks = 0
  }

}
