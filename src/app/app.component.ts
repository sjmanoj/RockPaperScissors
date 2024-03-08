import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public userScore: number = 0
  public compScore: number = 0
  public msg: string = 'Play Your Move'
  public color: string = '#081b31'

  compGenChoice = ()=>{
    const gameOptions = ['rock', 'paper', 'scissors']
    return gameOptions[Math.floor(Math.random() * 3)]
  }

  userGenChoice(val: string){
    let compChoice = this.compGenChoice()
    let userChoice = val
    // console.log(compChoice, userChoice);
    this.checkWinner(compChoice, userChoice)
  }

  checkWinner(compChoice: string, userChoice: string){
    if (compChoice === userChoice){
      this.msg = 'Game ended in a Draw! Play Again'
      this.color = '#081b31'
    }else{
      let userWin = true
      if (userChoice === 'rock'){
        userWin = compChoice === 'scissors' ? true : false
      }else if (userChoice === 'paper'){
        userWin = compChoice === 'rock' ? true : false
      }else{
        userWin = compChoice === 'paper' ? true : false
      }
      // console.log(compChoice, userChoice, `userWin = ${userWin}`);
      this.showWinner(compChoice, userChoice, userWin)
    }
  }

  showWinner(compChoice: string, userChoice: string, userWin: boolean){
    if(userWin){
      this.msg = `You Win! Your ${userChoice} beat(s) ${compChoice}`
      this.userScore+=1
      this.color = 'green'
    }else{
      this.msg = `Comp Wins! ${compChoice} beat(s) Your ${userChoice}`
      this.compScore+=1
      this.color = 'red'
    }
  }


}
