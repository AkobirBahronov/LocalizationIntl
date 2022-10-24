import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxDataGridModule,
  DxSelectBoxModule,
  DxButtonModule,
} from 'devextreme-angular';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, DxSelectBoxModule, DxDataGridModule, DxButtonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
