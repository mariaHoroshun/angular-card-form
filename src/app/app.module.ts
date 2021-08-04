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
  DxDropDownBoxModule,
} from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { ScheduleCardComponent } from './schedule-card/schedule-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleCardComponent
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
