import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudTestRoutingModule } from './crud-test-routing.module';
import { HomeComponent } from './home/home.component';
import { EditPersonneComponent } from './personne/edit-personne/edit-personne.component';
import { DetailPersonneComponent } from './personne/detail-personne/detail-personne.component';
import { AddPersonneComponent } from './personne/add-personne/add-personne.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    EditPersonneComponent,
    DetailPersonneComponent,
    AddPersonneComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CrudTestRoutingModule
  ]
})
export class CrudTestModule { }
