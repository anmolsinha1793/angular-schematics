import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyFeatureRoutingModule } from './lazy-feature-routing.module';
import { OnDemandComponent } from './on-demand/on-demand.component';


@NgModule({
  declarations: [OnDemandComponent],
  imports: [
    CommonModule,
    LazyFeatureRoutingModule
  ]
})
export class LazyFeatureModule { }
