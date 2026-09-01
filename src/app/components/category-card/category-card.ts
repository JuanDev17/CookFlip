import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ICategory } from '../../api/types/category.type';

@Component({
  imports: [CommonModule, MatCardModule],
  selector: 'app-category-card',
  styleUrl: './category-card.scss',
  templateUrl: './category-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CategoryCard {

  @Input() category!: ICategory;



  
  





}
