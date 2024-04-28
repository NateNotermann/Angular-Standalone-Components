import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Dog } from './dogs.service';

@Component({
  selector: 'app-dogs-list-card',
  standalone: true,
  imports: [CommonModule],
  template: `
  <p>test</p>

  `,
  styles: ``
})
export class DogsListCardComponent implements OnInit {
  @Input() dog!: Dog; 
  constructor() { }

  ngOnInit(): void {
  }
}
