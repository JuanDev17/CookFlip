import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SideNavigation } from '../../components/side-navigation/side-navigation';
import { SearchComponent } from '../../components/search-component/search-component';
import { MatIconModule } from '@angular/material/icon';
import { DiscoverCard } from "../../components/discover-card/discover-card";
import { DiscoverFeed } from '../../api/mocks/discover-feed';
import { MatButtonModule } from '@angular/material/button';
import { CategoryCard } from '../../components/category-card/category-card';
import { Categories } from '../../api/mocks/categories';
import { BoardService } from '../../components/board-card/services/board-service';
import { BoardCard } from '../../components/board-card/board-card';

@Component({
  imports: [CommonModule, SideNavigation, SearchComponent, MatIconModule, DiscoverCard, MatButtonModule, CategoryCard, BoardCard
    
  ],
  selector: 'app-discover',
  styleUrl: './discover.scss',
  templateUrl: './discover.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Discover {

  #discoverService = inject(DiscoverFeed);
  #categoryService = inject(Categories);
  #boardService = inject(BoardService);

  visibleCount = 3;
  visibleCatCount = 10;

  showMore() {
    this.visibleCount += 3;
  }

  showMoreCat(){
    this.visibleCatCount += 5;
  }

  // full list -- 
  get discoverItems(){
    return this.#discoverService.discoverItems;
  }

  get Categories(){
    return this.#categoryService.categories
  }

  get boards(){
    return this.#boardService.trendingBoards;
  }






}
