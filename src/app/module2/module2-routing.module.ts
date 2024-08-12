import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  {
    path: 'comp2',
    component: Comp2Component,
  },
  {
    path: 'final',
    loadChildren: () =>
      import('./final/final.module').then((mod) => mod.FinalModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Module2RoutingModule {}
