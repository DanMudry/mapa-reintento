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
  /*ngOnInit(): void {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${api}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }*/
}
