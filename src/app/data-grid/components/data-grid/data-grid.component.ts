import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { DataGridService } from '../../services/data-grid.service';

@Component({
  selector: 'x-aggrid-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  constructor(private dataGridService: DataGridService) {
  }

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  style: any = {
    height: "500px",
    width: "620px"
  }
  rowData$! : Observable<any[]>;

  colDefs: ColDef[] = [
    {field: 'athlete'},
    {field: 'age'},
    {field: 'country'},
    {field: 'year'},
    {field: 'sport'},
    {field: 'gold'},
    {field: 'silver'},
    {field: 'bronze'},
    {field: 'total'}
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true
  }
  ngOnInit(){
    this.rowData$ = this.dataGridService.getRowData();
  }

  onCellClicked(event: CellClickedEvent){
    console.log(event);
  }

  clearSelection(){
    this.agGrid.api.deselectAll();
  }
}
