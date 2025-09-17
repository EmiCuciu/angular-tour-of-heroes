import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroDetail } from "../hero-detail/hero-detail";

@Component({
  standalone: true,
  selector: 'app-heroes',
  imports: [CommonModule, FormsModule, HeroDetail],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class Heroes {
  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}
