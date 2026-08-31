import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IDiscoverCard } from '../../api/types/discover-card';

@Component({
  imports: [CommonModule, MatCardModule, MatIconModule],
  selector: 'app-discover-card',
  styleUrl: './discover-card.scss',
  templateUrl: './discover-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscoverCard {

  @Input() title = '';
  @Input() type = ''; 

  // open modal 
  
}
