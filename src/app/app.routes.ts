import { Routes } from '@angular/router';
import { MapaComponent } from './pages/mapa/mapa.component';
import { CountryViewComponent } from './pages/country-view/country-view.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mapas' },
  { path: 'mapas', component: MapaComponent },
  { path: 'countrie/:code', component: CountryViewComponent },
];
