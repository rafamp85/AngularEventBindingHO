import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html'
})
export class GameControlComponent {
    @Output() startGame = new EventEmitter<boolean>();
    @Output() pauseGame = new EventEmitter<boolean>();
    @Output() stopGame = new EventEmitter<boolean>();

    constructor() {}

    onStartGame() {
        this.startGame.emit(true);
    }

    onPauseGame() {
        this.pauseGame.emit(true);
    }

    onStopGame() {
        this.stopGame.emit(true);
    }

}