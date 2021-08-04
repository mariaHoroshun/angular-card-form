import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxPopupModule, DxButtonModule, DxTemplateModule, DxDateBoxModule } from 'devextreme-angular';
import { Schedule } from './sсhedule';
import { ActivatedRoute, Router } from '@angular/router';
import { DataItem, TableDataService } from './table-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TableDataService]
})
export class AppComponent{
  title = 'angular-card-form';
  closeButtonOptions: any;

  showInfo() {
    this._router.navigate(['schedule']);
  }

  dataItems : DataItem[];

  constructor(private _router : Router, service: TableDataService){
    this.dataItems = service.getData();
  }

}