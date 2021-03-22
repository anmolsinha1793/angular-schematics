import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnDemandComponent } from './on-demand/on-demand.component';


const routes: Routes = [{
  path:'',
  component: OnDemandComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyFeatureRoutingModule { }
