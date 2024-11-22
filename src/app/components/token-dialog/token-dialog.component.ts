import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-token-dialog',
  standalone: true,
  imports: [MatButtonModule, FormsModule],
  templateUrl: './token-dialog.component.html',
  styleUrl: './token-dialog.component.scss'
})
export class TokenDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<TokenDialogComponent>,
  ){}

  inputToken: string;

  availableTokens: string[];
  alreadyUsedTokens:string[];

  showError = false;
  showAlreadyUsedAlert = false;

  ngOnInit(): void {
    this.availableTokens = localStorage.getItem('availableTokens')?.split(',') as string[];
    this.alreadyUsedTokens = localStorage.getItem('alreadyUsedTokens')?.split(',') as string[];
  }

  closeModal(res?: boolean){
    this.dialogRef.close(res);
  }

  checkToken(){
    let token = this.inputToken.toLowerCase();
    

    if(this.alreadyUsedTokens.includes(token)){
      this.showError=false
      this.showAlreadyUsedAlert = true;


      let interval = setTimeout(() => {
          this.showAlreadyUsedAlert = false;
          clearInterval(interval)
      }, 3000);

      return;
    }

    if(this.availableTokens.includes(token)){
      let removedItem = this.availableTokens.findIndex((arrValue) => arrValue===token);
      this.availableTokens.splice(removedItem,1);
      this.alreadyUsedTokens.push(token);
      
      localStorage.setItem('availableTokens', this.availableTokens.toString());
      localStorage.setItem('alreadyUsedTokens', this.alreadyUsedTokens.toString());


      this.closeModal(true);
      return;
    }

    this.showAlreadyUsedAlert = false;
    this.showError = true;

    let interval = setTimeout(() => {
      this.showError = false;
      clearInterval(interval)
    }, 3000);
  }
}
