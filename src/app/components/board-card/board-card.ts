import { Component, inject, Input } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BoardService } from './services/board-service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PopularBoard } from '../../api/types/board.type';

@Component({
  imports: [MatCardModule, MatIconModule],
  selector: 'app-board-card',
  styleUrl: './board-card.scss',
  templateUrl: './board-card.html',
  providers: [BoardService],
})
export class BoardCard {

  // input property to receive 
  @Input() board!: PopularBoard;

}
