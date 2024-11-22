import { Component } from '@angular/core';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  timeRemaining = dayjs.duration(30, 'minutes'); // Start with 1 hour
  timerDisplay = ''; // String for displaying the timer
  intervalId: any; // Reference for the interval

  ngOnInit() {
    this.updateDisplay();
    this.startTimer();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  startTimer() {

    if(localStorage.getItem('time')){
      let ms = localStorage.getItem('time')

      this.timeRemaining = dayjs.duration(parseInt(ms as string, 10));
    }

    this.intervalId = setInterval(() => {
      if (this.timeRemaining.asSeconds() <= 0) {
        this.clearTimer();
        this.timerDisplay = "Time's up!";
      } else {
        this.timeRemaining = this.timeRemaining.subtract(1, 'second');
        localStorage.setItem('time', this.timeRemaining.asMilliseconds().toString());
        
        this.updateDisplay();
      }
    }, 1000);
  }

  addMinuts(){
    this.timeRemaining = this.timeRemaining.add(15, 'minutes');
    localStorage.setItem('time', this.timeRemaining.asMilliseconds().toString());
    
  }

  updateDisplay() {
    this.timerDisplay = this.timeRemaining.format('HH:mm:ss');
  }

  clearTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
