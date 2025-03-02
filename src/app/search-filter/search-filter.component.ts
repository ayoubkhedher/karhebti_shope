import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  selectedBrand: string = '';
  selectedYear: string = '';
  selectedModel: string = '';
  selectedEngine: string = '';
  search() {
    console.log('Search button clicked!', {
      brand: this.selectedBrand,
      year: this.selectedYear,
      model: this.selectedModel,
      engine: this.selectedEngine,
    });

}
}

