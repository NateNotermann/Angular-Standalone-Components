import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// import { DogViewComponent } from './dog-view.component'; // Removing STATIC IMPORT
import { DogslistComponent } from './dogslist.component';
import { NgModule } from '@angular/core';
// import { DogsListCardComponent } from './dogs-list-card.component'; // Doesn't need to be here. b/c its standalone

const routes: Routes = [
    {path:'', pathMatch: 'full', redirectTo: 'list' },
    {path: 'list', component: DogslistComponent },
    // {path: 'list-card', component: DogsListCardComponent },  // Doesn't need to be here. b/c its standalone

    // adding DYNAMIC IMPORT below
    // This is "LAZY LOADING". It only loads when the ROUTE is hit.
    // This means the DogView is not part of the main/initial bundle. Improving app performance.
    {path: 'details/:index', loadComponent: () => import('./dog-view.component').then(m=> m.DogViewComponent) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }