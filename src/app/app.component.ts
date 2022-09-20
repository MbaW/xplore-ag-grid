import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { CellChangedEvent } from 'ag-grid-community/dist/lib/entities/rowNode';
import { Observable } from 'rxjs';

@Component({
  selector: 'x-aggrid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  title = 'xplore-ag-grid';

  style: any = {
    height: "500px",
    width: "620px"
  }
  rowData$! : Observable<any[]>;

  rowData: any[] = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porshe', model: 'Boxster', price: 75000},
  ];
  colDefs: ColDef[] = [
    {field: 'make'},
    {field: 'model'},
    {field: 'price'}
  ];

  defaultColDef: ColDef = {
    sortable: true, filter: true
  }
  ngOnInit(){
    this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json')
  }

  onCellClicked(event: CellClickedEvent){
    console.log(event);
  }

  clearSelection(){
    this.agGrid.api.deselectAll();
  }
}
