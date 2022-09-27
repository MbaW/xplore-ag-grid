import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGridComponent } from './components/data-grid/data-grid.component';

const routes: Routes = [
  {
    path: '',
    component: DataGridComponent,
    children: [
      {
        path: '',
        redirectTo: 'dataGrid',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataGridRoutingModule { }
