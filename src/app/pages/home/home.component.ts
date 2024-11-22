import { Component } from '@angular/core';
import { RoomsCardsComponent } from '../../components/rooms-cards/rooms-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RoomsCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  roomsArr = [
    {
      name:'Sala 213',
      members: 12,
      icon:'mdi mdi-eye-plus',
      status:'inative'
    },
    {
      name:'Sala 1122',
      members: 8,
      icon:'mdi mdi-pill',
      status:'inative'
    },
    {
      name:'Sala 42',
      members: 7,
      icon:'mdi mdi-needle',
      status:'active'
    },
    {
      name:'Sala 66',
      members: 345,
      icon:'mdi mdi-head-plus',
      status:'inative'
    },
    {
      name:'Sala 111111',
      members: 4,
      icon:'mdi mdi-account',
      status:'inative'
    },
    {
      name:'Sala 312',
      members: 63,
      icon:'mdi mdi-needle',
      status:'inative'
    },
    {
      name:'Sala 33',
      members: 2,
      icon:'mdi mdi-hospital-box',
      status:'inative'
    },
    {
      name:'Sala 123',
      members: 15,
      icon:'mdi mdi-account-alert',
      status:'inative'
    }
  ]
}
