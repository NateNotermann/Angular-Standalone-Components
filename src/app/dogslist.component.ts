import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService } from './dogs.service';

@Component({
  selector: 'app-dogslist',
  standalone: true,    // <-- Standalone components don’t require declaration in any module. 
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <h2 class="hero-text">
        Discover Pets to walk near you
      </h2>
    </section>
    <article class="pet-list">
      <ul>
        <li *ngFor="let dog of dogsService.dogs">
          {{dog.name}}
          <p>{{dog.description}}</p>
        </li>
      </ul>
    </article>
  `,
  styles: ``
})

export class DogslistComponent implements OnInit {
  constructor(readonly dogsService: DogsService) { }
    ngOnInit(): void {
    }
}
