import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp4Component } from './comp4/comp4.component';

const routes: Routes = [{ path: 'comp4', component: Comp4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalRoutingModule {}
