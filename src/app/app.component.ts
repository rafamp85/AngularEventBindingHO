import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Game stopped';
  count: number = 0;
  counter: any;

  evenNumber: number = 0;
  oddNumber: number = 0;
  isEvenSelected: boolean = false;
  isOddSelected: boolean = false;

  constructor() {}

  gameStarted(started: boolean) {
    this.title = 'Game Started';

    this.counter = setInterval( () => {
      this.count += 1;

      if( this.count % 2 === 0) {
        this.isEvenSelected = true;
        this.isOddSelected = false;

        this.evenNumber = this.count;
      } else {
        this.isEvenSelected = false;
        this.isOddSelected = true;

        this.oddNumber = this.count;
      }
    }, 1000);
  }

  gamePaused(stopped: boolean) {
    if( this.count === 0 ) return;
    this.title = 'Game Paused';
    clearInterval(this.counter);
  }

  gameStopped(stopped: boolean) {
    this.title = 'Game Stopped';
    clearInterval(this.counter);

    this.count = 0;
    this.evenNumber = 0;
    this.oddNumber = 0;

    this.isEvenSelected = false;
    this.isOddSelected = false;
  }

  evenSelected() {
    return {'list-group-item': this.isEvenSelected, 'list-group-item-success': this.isEvenSelected}
  }

  oddSelected() {
    return {'list-group-item': this.isOddSelected, 'list-group-item-success': this.isOddSelected}
  }
}
