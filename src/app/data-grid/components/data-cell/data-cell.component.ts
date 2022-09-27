import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { DataCellParams } from '../../interfaces/data-cell-params';

@Component({
  selector: 'x-aggrid-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnInit, ICellRendererAngularComp {

  value: any;
  buttonText: string = 'Default';

  agInit(params: ICellRendererParams & DataCellParams): void {
    this.value = params.value;
    this.buttonText = params.buttonText?? 'Default';
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }
  onClick(e: any){
    alert(`Cell value is ${this.value}`);
  }

  ngOnInit(): void {
  }

}
