import { TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',  
  providers: [TitleCasePipe],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css'
})
export default class CountryDetailsComponent implements OnInit{
  private activatedRoute = inject(ActivatedRoute);
  private titleCasePipe = inject(TitleCasePipe);

  public countryName = signal<string>('');

  ngOnInit(): void {
    this.getParamInRoute();
  }

  getParamInRoute() {
    this.activatedRoute.paramMap.subscribe(params => {
      const param = params.get('name') ?? '';
      this.countryName.set(this.titleCasePipe.transform(param));
      console.log(this.countryName());
    });
  }
}
