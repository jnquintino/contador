import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Contador [2026]';
  countdownInterval: any;
  finish = new Date(2026, 11, 31, 23, 59, 59, 999);
  show = '';

  ngOnInit() {
    this.countdownInterval = setInterval(() => {
      const now = new Date();
      if (now > this.finish) {
        this.show = 'Contador terminado';
        clearInterval(this.countdownInterval);
      }
      this.show = this.contador(now);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.countdownInterval);
  }

  private contador(now: Date) {
    const timeLeft = this.finish.getTime() - now.getTime();
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    return days + (days > 1 ? ' dias ' : ' dia ') +
      hours + (hours > 1 ? ' horas ' : ' hora ') +
      minutes + (minutes > 1 ? ' minutos ' : ' minuto ') +
      seconds + (seconds > 1 ? ' segundos' : ' segundo');
  }
}
