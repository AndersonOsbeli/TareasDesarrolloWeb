import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// Nota: con @for no necesitas CommonModule para *ngFor
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `
    <h2 style="text-align:center; margin: 20px 0;">Productos disponibles</h2>

    <div class="grid">
      @for (p of productos; track p.nombre) {
        <mat-card class="producto-card">
          <img mat-card-image [src]="p.imagen" [alt]="p.nombre" />
          <mat-card-content>
            <h3>{{ p.nombre }}</h3>
            <p>{{ p.descripcion }}</p>
            <p><strong>Q{{ p.precio }}</strong></p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button color="primary" (click)="agregarAlCarrito(p)">
              Agregar al carrito
            </button>
          </mat-card-actions>
        </mat-card>
      }
    </div>
  `,
  styles: [`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
      padding: 16px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .producto-card {
      max-width: 320px;
      margin: auto;
    }
  `]
})
export class ProductosComponent {
  productos = [
    { nombre: 'Café Americano', precio: 15, descripcion: 'Café negro fuerte para empezar el día.', imagen: 'assets/img/cafe-americano.jpg' },
    { nombre: 'Café Latte', precio: 20, descripcion: 'Café con leche cremosa y suave.', imagen: 'assets/img/cafe-latte.jpg' },
    { nombre: 'Capuccino', precio: 22, descripcion: 'Espuma de leche con un toque de cacao.', imagen: 'assets/img/capuccino.jpg' },
    { nombre: 'Té Verde', precio: 12, descripcion: 'Infusión natural rica en antioxidantes.', imagen: 'assets/img/te-verde.jpg' },
    { nombre: 'Jugo de Naranja', precio: 18, descripcion: 'Natural, recién exprimido.', imagen: 'assets/img/jugo-naranja.jpg' },
    { nombre: 'Sandwich de Jamón', precio: 25, descripcion: 'Pan fresco con jamón, queso y vegetales.', imagen: 'assets/img/sandwich-jamon.jpg' },
    { nombre: 'Croissant', precio: 15, descripcion: 'Pan dulce de mantequilla recién horneado.', imagen: 'assets/img/croissant.jpg' },
    { nombre: 'Ensalada César', precio: 30, descripcion: 'Pollo, lechuga fresca y aderezo césar.', imagen: 'assets/img/ensalada-cesar.jpg' },
    { nombre: 'Pizza Personal', precio: 40, descripcion: 'Masa artesanal con queso y pepperoni.', imagen: 'assets/img/pizza.jpg' },
    { nombre: 'Hamburguesa', precio: 35, descripcion: 'Carne jugosa con vegetales frescos.', imagen: 'assets/img/hamburguesa.jpg' },
    { nombre: 'Brownie', precio: 15, descripcion: 'Pastelito de chocolate con nueces.', imagen: 'assets/img/brownie.jpg' },
    { nombre: 'Cheesecake', precio: 28, descripcion: 'Tarta cremosa de queso con fresa.', imagen: 'assets/img/cheesecake.jpg' },
  ];

  agregarAlCarrito(p: any) {
    console.log('Producto agregado:', p.nombre);
  }
}

