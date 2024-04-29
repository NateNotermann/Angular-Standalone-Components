import { NgModel } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DogViewComponent } from './dog-view.component';
import { DogslistComponent } from './dogslist.component';
import { NgModule } from '@angular/core';
// import { DogsListCardComponent } from './dogs-list-card.component'; // Doesn't need to be here. b/c its standalone

const routes: Routes = [
    {path:'', pathMatch: 'full', redirectTo: 'list' },
    {path: 'list', component: DogslistComponent },
    // {path: 'list-card', component: DogsListCardComponent },  // Doesn't need to be here. b/c its standalone
    {path: 'details/:index', component: DogViewComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }