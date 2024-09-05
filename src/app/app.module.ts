import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { UserFormComponent } from './userForm.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { MatTableModule } from '@angular/material/table';
import { DataTableComponent } from './data-table/data-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RformComponent } from './rform/rform.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { ForbiddenValidatorDirective } from './rform/fName.directive';
import { BuiltInDirComponent } from './built-in-dir/built-in-dir.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HttpCComponent } from './http-c/http-c.component';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    DataTableComponent,
    SimpleTableComponent,
    ForbiddenValidatorDirective,
    RformComponent,
    BuiltInDirComponent,
    RxjsComponent,
    HttpCComponent,
  ],
  bootstrap: [AppComponent], //root component
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HeaderComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    NgClass,
    NgStyle,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
