import { Routes } from '@angular/router';
// Update the path below if the actual file name or folder is different
import { ProductosComponent } from './productos/productos';

export const routes: Routes = [
    { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent },
];
