import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { Navbar } from './components/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
