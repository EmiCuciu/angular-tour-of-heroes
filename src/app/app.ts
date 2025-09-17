import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Heroes } from "./heroes/heroes";
import { HeroDetail } from "./hero-detail/hero-detail";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Heroes, FormsModule, HeroDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tour of Heroes');
}
