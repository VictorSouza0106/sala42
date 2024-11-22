import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pwdpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pwdpage.component.html',
  styleUrl: './pwdpage.component.scss'
})
export class PwdpageComponent {

  user = '';
  pwd = '';

  showError = false;

  constructor(
    private route: Router,
    private authService: AuthService,
  ){}

  login(){
    if(this.user != 'pwd' || this.pwd != '123456') {
      this.showError = true;
      
      let interval = setTimeout(() => {
        this.showError = false;
        clearInterval(interval)
      }, 3000);

      return;
    };

    this.route.navigateByUrl('home');

  }
}
