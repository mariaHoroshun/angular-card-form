import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  DxTextAreaModule, 
  DxDateBoxModule,
  DxButtonModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxFormModule,
  DxLoadPanelModule,
  DxMenuModule,
  DxPopupModule,
  DxScrollViewModule,
  DxSelectBoxModule,
  DxSwitchModule,
  DxTextBoxModule,
  DxValidatorModule,
  DxListModule,
  DxDropDownBoxModule} from 'devextreme-angular';
import { ExchangeCardComponent } from './exchange-card/exchange-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeCardComponent
  ],
  imports: [
    FormsModule,
    DxDateBoxModule,
    DxTextAreaModule,
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    DxMenuModule,
    DxPopupModule,
    DxTextBoxModule,
    DxSwitchModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxFormModule,
    DxButtonModule,
    DxValidatorModule,
    DxLoadPanelModule,
    DxScrollViewModule,
    DxDropDownBoxModule,
    DxListModule,
    DxSelectBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
