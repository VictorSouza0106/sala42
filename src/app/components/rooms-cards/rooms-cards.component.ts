import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-cards.component.html',
  styleUrl: './rooms-cards.component.scss'
})
export class RoomsCardsComponent {
  constructor(
    private router: Router
  ){}

  @Input() room: any;

  initRoom(){
    this.router.navigateByUrl('sala42');
  }
}
