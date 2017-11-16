import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  { path: 'details/:id', component: DetailsComponent },
  { path: 'all', component: AllComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
