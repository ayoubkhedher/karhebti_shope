import { Component } from '@angular/core';
import { SearchFilterComponent } from "../search-filter/search-filter.component";
import { CarPartsComponent } from '../car-parts/car-parts.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [SearchFilterComponent,CarPartsComponent,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
