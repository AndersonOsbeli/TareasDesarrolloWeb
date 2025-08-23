import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // Usamos template inline en vez de app.component.html
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {}

