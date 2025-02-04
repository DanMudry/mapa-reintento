import { Component, signal } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [GoogleMap, MapMarker],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css',
})
export class MapaComponent {
  myPosition = signal<any>('');
  ngOnInit(): any {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      let center: any = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      this.myPosition.set(center);
    });
  }
}
