import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule, CommonModule],
  selector: 'app-search-component',
  styleUrl: './search-component.scss',
  templateUrl: './search-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SearchComponent {


}
