import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { CountryService } from '../../services/country.service';
import { ResponseCountry } from '../../interfaces/response.country.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-by-capital',
  imports: [SearchInputComponent, CountryTableComponent],
  templateUrl: './by-capital.component.html'
})
export default class ByCapitalComponent {
  private countryServ = inject(CountryService);

  public countries = signal<ResponseCountry[]>([]);
  public hasError = signal<boolean>(false);
  public isLoading = signal<boolean>(false);

  onSearch(value: string) {
    if(this.isLoading()) return;

    this.isLoading.set(true);

    this.countryServ.searchByCapital(value).subscribe({
      next: (data) => {
        this.isLoading.set(false);
        this.countries.set(data);
      },
      error: (err: HttpErrorResponse) => this.handleError(err)
    });
  };


  handleError(err: HttpErrorResponse) {
    this.isLoading.set(false);
  }
}
