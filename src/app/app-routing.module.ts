import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedComponent } from './shop/featured/featured.component';

const routes: Routes = [
  { path: 'store', component: FeaturedComponent },
  { path: '', redirectTo: 'store', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
