import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimerComponent } from "./components/timer/timer.component";
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'sala42';

  isAuth = false;

  constructor(
    private authService: AuthService,
  ){
    this.authService.isAuth.subscribe(isAuth => this.isAuth = isAuth);
  }

  ngOnInit(): void {
    this.settingConfigs();
  }

  settingConfigs(){
    if(!localStorage.getItem('availableTokens')){
      localStorage.setItem('availableTokens',['hotegg', 'xbysun', 'secret','1','2','3','4'].toString());
      localStorage.setItem('alreadyUsedTokens',[].toString());
      
    }
  }
}
