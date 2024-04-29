import { Routes } from '@angular/router';
import { DogslistComponent } from './dogslist.component';
import { DogsListCardComponent } from './dogs-list-card.component';
import { DogViewComponent } from './dog-view.component';

export const routes: Routes = [
    {path:'', pathMatch: 'full', redirectTo: 'list' },
    {path: 'list', component: DogslistComponent },
    // {path: 'list-card', component: DogsListCardComponent },
    {path: 'details/:index', component: DogViewComponent},
];
