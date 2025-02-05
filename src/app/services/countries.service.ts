import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICountry } from '../interfaces/icountry.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl: string = 'https://restcountries.com/v3.1/region/';

  private httpCliente = inject(HttpClient);
  getAll(region = 'south america'): Promise<ICountry[]> {
    return lastValueFrom(
      this.httpCliente.get<ICountry[]>(`${this.baseUrl}${region}`)
    );
  }
}
