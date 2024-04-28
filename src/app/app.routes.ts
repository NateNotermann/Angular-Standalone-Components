import { Routes } from '@angular/router';
import { DogslistComponent } from './dogslist.component';

export const routes: Routes = [
    {path:'', pathMatch: 'full', redirectTo: 'list' },
    {path: 'list', component: DogslistComponent },
];
