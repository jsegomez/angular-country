import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ResponseCountry } from '../interfaces/response.country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(value: string):Observable<ResponseCountry[]> {
    const url = `${environment.baseUrl}/capital/${value}`;

    return this.http.get<ResponseCountry[]>(url);
  }
}
