import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'x-aggrid-over',
  templateUrl: './over.component.html',
  styleUrls: ['./over.component.scss']
})
export class OverComponent implements OnInit, ICellRendererAngularComp {

  value: any;

  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
  }

}
