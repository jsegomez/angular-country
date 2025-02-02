import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country',
  imports: [SearchInputComponent, CountryTableComponent],
  templateUrl: './by-country.component.html'
})
export default class ByCountryComponent {
  private countryServ = inject(CountryService);
  query = signal<string>('');

  countryResource = rxResource({
    request: () => ({query: this.query()}),
    loader: ({ request}) => {
      if(!request.query) return of([]);
      else return this.countryServ.searchByCountryName(request.query);
    }
  });
}
