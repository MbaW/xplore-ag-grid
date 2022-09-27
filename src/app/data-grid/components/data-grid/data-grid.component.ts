import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, ICellRendererParams, SideBarDef, StatusPanelDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { GoodByeComponent } from 'src/app/good-bye/good-bye.component';
import { HelloComponent } from 'src/app/hello/hello.component';
import { DataCellParams } from '../../interfaces/data-cell-params';
import { DataGridService } from '../../services/data-grid.service';
import { DataCellComponent } from '../data-cell/data-cell.component';
import { OverComponent } from '../over/over.component';
import { UnderComponent } from '../under/under.component';

@Component({
  selector: 'x-aggrid-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  constructor(private dataGridService: DataGridService) {
  }

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  public columnDefs: ColDef[] = [
    {
      field: 'athlete',
      cellRenderer: DataCellComponent,
      cellRendererParams: {
        buttonText: 'Name'
      } as DataCellParams
    },
    {
      field: 'age',
      cellRenderer: DataCellComponent,
      cellRendererSelector: (params: ICellRendererParams) => {
        if(params.value < 25){
          return { component: UnderComponent};
        }
        return { component: OverComponent};
      }
    },
    {
      field: 'country',
      cellRenderer: (params: ICellRendererParams) => {
        return `<b>!! ${params.value}</b>`
      }
    },
    {
      field: 'year',
      editable: true
    },
    {field: 'sport'},
    {field: 'gold'},
    {field: 'silver'},
    {field: 'bronze'},
    {field: 'total'}
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true
  };

  public rowData$! : Observable<any[]>;

  public statusBar: {
    statusPanels: StatusPanelDef[];
  } = {
    statusPanels: [
      {
        statusPanel: HelloComponent,
      },
      {
        statusPanel: GoodByeComponent,
      },
      {
        statusPanel: 'agAggregationComponent',
        statusPanelParams: {
          aggFuncs: ['count', 'sum']
        },
      },
    ],
  };

  public sideBar: SideBarDef = {
    toolPanels: [
      'columns',
      'filters',
      {
        id: 'customStats',
        labelDefault: 'Custom Stats',
        labelKey: 'customStats',
        iconKey: 'custom-stats',
        toolPanel: HelloComponent
      },
    ],
    defaultToolPanel: 'customStats',
  };

  public components = {
    hello: HelloComponent,
    goodbye: GoodByeComponent
  }

  style: any = {
    height: "800px",
    width: "100%",
    margin: "0 auto"
  }

  ngOnInit(){
    this.rowData$ = this.dataGridService.getAthletes();
  }

  onCellClicked(event: CellClickedEvent){
    console.log(event);
  }

  clearSelection(){
    this.agGrid.api.deselectAll();
  }
  onGridReady(params: GridReadyEvent){
    this.rowData$ = this.dataGridService.getAthletes();
  }
}
