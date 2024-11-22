import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-members-card',
  standalone: true,
  imports: [],
  templateUrl: './members-card.component.html',
  styleUrl: './members-card.component.scss'
})
export class MembersCardComponent {

  @Input() member: any;

  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>()



}
