import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGridModule } from './data-grid/data-grid.module';
import { HelloComponent } from './hello/hello.component';
import { GoodByeComponent } from './good-bye/good-bye.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    GoodByeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
