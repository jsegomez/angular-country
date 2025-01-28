import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";

@Component({
  selector: 'app-by-country',
  imports: [SearchInputComponent, CountryTableComponent],
  templateUrl: './by-country.component.html'
})
export default class ByCountryComponent {
  onSearch(value: string) {
    console.log(value);
  };
}
