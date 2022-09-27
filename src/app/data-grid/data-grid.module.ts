import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataGridRoutingModule } from './data-grid-routing.module';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { DataCellComponent } from './components/data-cell/data-cell.component';
import { UnderComponent } from './components/under/under.component';
import { OverComponent } from './components/over/over.component';


@NgModule({
  declarations: [
    DataGridComponent,
    DataCellComponent,
    UnderComponent,
    OverComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    DataGridRoutingModule,
    HttpClientModule
  ]
})
export class DataGridModule { }
