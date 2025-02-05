import { Component, inject, signal } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { ICountry } from '../../interfaces/icountry.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [GoogleMap, MapMarker],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css',
})
export class MapaComponent {
  myPosition = signal<any>('');
  arrCountries: ICountry[] = [];
  countryService = inject(CountriesService);
  async ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      let center: any = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      this.myPosition.set(center);
    });
    let response = await this.countryService.getAll();
    console.log(response);
    this.arrCountries = response;
  }

  getPosition(latlng: any): void {
    console.log(latlng);
  }
}
