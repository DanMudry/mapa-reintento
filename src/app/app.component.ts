import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { api } from '../api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mapas';
}

/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Mapa Dinámico</h1>
    <div id="map" style="height: 400px; width: 100%;"></div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  apiKey = 'TU_API_KEY'; // Reemplaza con tu clave de API

  ngOnInit(): void {
    this.loadGoogleMapsScript().then(() => {
      this.initializeMap();
    });
  }

  loadGoogleMapsScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Verifica si el script ya está cargado
      if (document.querySelector(`script[src="https://maps.googleapis.com/maps/api/js?key=${this.apiKey}"]`)) {
        resolve(); // Si ya está cargado, resuelve de inmediato
        return;
      }

      // Crea el script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`;
      script.async = true;
      script.defer = true;

      // Maneja el evento de carga
      script.onload = () => resolve();
      script.onerror = (error) => reject(error);

      // Agrega el script al <head>
      document.head.appendChild(script);
    });
  }

  initializeMap(): void {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -34.6037, lng: -58.3816 }, // Coordenadas de ejemplo (Buenos Aires)
      zoom: 12,
    });
  }
}
*/
