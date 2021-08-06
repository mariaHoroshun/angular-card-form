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
  DxTreeListModule
} from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { ScheduleCardComponent } from './schedule-card/schedule-card.component';
import { PlanCardComponent } from './plan-card/plan-card.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { TrsPageComponent } from './trs-page/trs-page.component';
import { ReactorsPageComponent } from './reactors-page/reactors-page.component';
import { MetersPageComponent } from './meters-page/meters-page.component';
import { LinkStationsComponent } from './link-stations/link-stations.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleCardComponent,
    PlanCardComponent,
    SummaryPageComponent,
    TrsPageComponent,
    ReactorsPageComponent,
    MetersPageComponent,
    LinkStationsComponent
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
    DxSelectBoxModule,
    DxTreeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
