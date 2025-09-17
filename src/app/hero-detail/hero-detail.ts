import { Component, Input } from '@angular/core';
import { NgIf, UpperCasePipe } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  imports: [FormsModule, NgIf, UpperCasePipe],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css'
})
export class HeroDetail {
  @Input() hero?: Hero;
}
