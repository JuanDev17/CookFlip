import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideNavigation } from '../../components/side-navigation/side-navigation';
import { SearchComponent } from '../../components/search-component/search-component';
import { MatIconModule } from '@angular/material/icon';
import { DiscoverCard } from "../../components/discover-card/discover-card";

@Component({
  imports: [CommonModule, SideNavigation, SearchComponent, MatIconModule, DiscoverCard],
  selector: 'app-discover',
  styleUrl: './discover.scss',
  templateUrl: './discover.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Discover {}
