import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataGridRoutingModule } from './data-grid-routing.module';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DataGridComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    DataGridRoutingModule,
    HttpClientModule
  ]
})
export class DataGridModule { }
