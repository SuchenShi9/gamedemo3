import { Component } from '@angular/core';
import { Card } from './card.class';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-colorcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colorcard.component.html',
  styleUrl: './colorcard.component.css'
})
export class ColorcardComponent {
  titleColor: string = 'red';
  cards: Card[] = [
    new Card('Card 1', 'This is card 1', 'red'),
    new Card('Card 2', 'This is card 2', 'blue'),
    new Card('Card 3', 'This is card 3', 'green'),
    new Card('Card 4', 'This is card 4', 'yellow')
  ];

  changeTitleColor(color: string) {
    this.titleColor = color;
  }
}
