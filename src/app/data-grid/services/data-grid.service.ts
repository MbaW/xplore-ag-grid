import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataGridService {
  constructor(private http: HttpClient) {
  }
  getRowData(): Observable<any[]>{
    return this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json')
  }
}
