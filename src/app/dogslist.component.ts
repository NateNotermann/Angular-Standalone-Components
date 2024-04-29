import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService } from './dogs.service';
import { DogsListCardComponent } from './dogs-list-card.component';

@Component({
  selector: 'app-dogslist',
  standalone: true,    // <-- Standalone components don’t require declaration in any module. 
  imports: [CommonModule, DogsListCardComponent],
  template: `
    <section class="hero-section">
      <h2 class="hero-text">
        Discover Pets to walk near you
      </h2>
    </section>
    <article class="pet-list">
      <app-dogs-list-card *ngFor="let dog of dogsService.dogs; let i = index" [index]="i" [dog]="dog"></app-dogs-list-card>
      <!-- <ul>
        <li *ngFor="let dog of dogsService.dogs">
          {{dog.name}}
          <p>{{dog.description}}</p>
        </li>
      </ul> -->
    </article>
  `,
  styles: [`
      .pet-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px; 
      padding: 10px;
    }

    .hero-text {
      font-size: 25pt;
      padding: 10px;
    }
  `]
})

export class DogslistComponent implements OnInit {
  constructor(readonly dogsService: DogsService) { }
    ngOnInit(): void {
    }
}
