import { Component } from '@angular/core';
import { CountryTableComponent } from "../../components/country-table/country-table.component";

@Component({
  selector: 'app-by-region',
  imports: [CountryTableComponent],
  templateUrl: './by-region.component.html'
})
export default class ByRegionComponent {
  onSearch(value: string) {
    console.log(value);
  };
}
