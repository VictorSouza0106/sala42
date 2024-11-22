import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { TimerComponent } from "../../components/timer/timer.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TokenDialogComponent } from '../../components/token-dialog/token-dialog.component';
import { MembersCardComponent } from '../../components/members-card/members-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala42',
  standalone: true,
  imports: [TimerComponent, MatDialogModule, MembersCardComponent],
  templateUrl: './sala42.component.html',
  styleUrl: './sala42.component.scss'
})
export class Sala42Component implements OnInit  {
  
  @ViewChild('timer') timerComponent: TimerComponent;

  MOCK_MEMBERS = [
    {name:'Bruna Ferreira',img:'default.png',status:false},
    {name:'Laura Santos',img:'amanda.png',status:false},
    {name:'Lucas Moreira',img:'rafa.png',status:false},
    {name:'Miguel Cardoso',img:'carlos.png',status:false},
    {name:'Paulo Costa',img:'daniel.png',status:false},
    {name:'Sofia Mendes',img:'bianca.png',status:false},
    {name:'Thiago Almeida',img:'vitor.png',status:false},
  ]

  members: any[];

  constructor(
    private dialog: MatDialog,
    private router:Router,
  ){
  }

  ngOnInit(): void {

    

    if(localStorage.getItem('char')){
      this.members = JSON.parse(localStorage.getItem('char') as string);
    }
    else{
      this.members = this.MOCK_MEMBERS;
      localStorage.setItem('char', JSON.stringify(this.MOCK_MEMBERS));
    }
  }

  openTokenDialog(member: any){
    if(member.status){
      this.router.navigate(['/member'],{queryParams:{name: member.name}});
      return;
    }
    let dialogref = this.dialog.open(TokenDialogComponent);

    dialogref.afterClosed().subscribe((res) => {
      if(!res) return;
      
      this.timerComponent.addMinuts();
      let selectedMember = this.members.find((memberArr => member.name === memberArr.name)) ?? this.members[0];
      selectedMember.status = true;
      localStorage.setItem('char', JSON.stringify(this.members));      
      this.router.navigate(['/member'],{queryParams:{name: member.name}});
    });
  }


}
