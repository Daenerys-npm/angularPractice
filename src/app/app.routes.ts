import { Routes } from '@angular/router';
import { UserFormComponent } from './userForm.component';
import { HeaderComponent } from './header.component';

import { DataTableComponent } from './data-table/data-table.component';

export const routes: Routes = [
  { path: ' /', component: HeaderComponent },
  { path: 'userForm', component: UserFormComponent },
  { path: 'header', component: HeaderComponent },
  {
    path: 'module2',
    loadChildren: () =>
      import('./module2/module2.module').then((mod) => mod.Module2Module),
  },
  {
    path: 'module3',
    loadChildren: () =>
      import('./module3/module3.module').then((mod) => mod.Module3Module),
  },
  {
    path: 'data-table',
    component: DataTableComponent,
  },
];
