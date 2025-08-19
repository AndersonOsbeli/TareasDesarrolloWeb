import { Component, signal } from '@angular/core';
import { CardComponent } from './card/card'; 
import { CommonModule } from '@angular/common'; 



@Component({
  selector: 'app-root',
  standalone : true,
  imports: [CommonModule,CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tareaAngular');
}
