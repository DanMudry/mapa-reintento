import { Component } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [GoogleMap, MapMarker],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css',
})
export class MapaComponent {}
