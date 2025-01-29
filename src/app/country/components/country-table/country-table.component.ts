import { Component, input } from '@angular/core';
import { ResponseCountry } from '../../interfaces/response.country.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-table',
  imports: [CommonModule],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  public countries = input.required<ResponseCountry[]>();
}
