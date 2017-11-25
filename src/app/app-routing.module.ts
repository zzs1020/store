import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturedComponent } from './shop/featured/featured.component';

const routes: Routes = [
  { path: '', component: FeaturedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true } /* <-- debugging purposes only */)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
