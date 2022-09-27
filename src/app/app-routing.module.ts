import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dataGrid',
    loadChildren: ()=> import('./data-grid/data-grid.module').then(m => m.DataGridModule)
  },
  {
    path: '',
    redirectTo: 'dataGrid',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
