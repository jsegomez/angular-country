import { AfterViewInit, Component, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";

@Component({
  selector: 'app-by-capital',
  imports: [SearchInputComponent, CountryTableComponent],
  templateUrl: './by-capital.component.html'
})
export default class ByCapitalComponent {
  onSearch(value: string) {
    console.log(value);
  };
}
