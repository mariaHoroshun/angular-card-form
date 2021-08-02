import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxPopupModule, DxButtonModule, DxTemplateModule, DxDateBoxModule } from 'devextreme-angular';
import { Schedule } from './sсhedule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './new-styles.css']
})
export class AppComponent {
  title = 'angular-card-form';
  popupVisible = false;
  overflowVisible = true;
  closeButtonOptions: any;

  schedules: Schedule[] = [];
  
  currentSchedule: Schedule = {
    year: 2021,
    month: 12,
    planDate: new Date(),
    startNow: false,
    station: "Станция 1"
  };

  allStations : string[] = [
    "Станция 1",
    "Станция 2",
    "Станция 3",
    "Станция 4",
    "Станция 5",
    "Станция 6",
    "Станция 7"
  ];

  saveInfo(event : any): void {
    if (!event.validationGroup.validate()?.isValid) {
      return;
    }else{
    this.schedules.push(new Schedule(this.currentSchedule.year, this.currentSchedule.month, this.currentSchedule.planDate, this.currentSchedule.startNow, this.currentSchedule.station));
    }
  }

  showInfo() {
    this.popupVisible = true;
    this.overflowVisible = false;
  }

  closeInfo() {
    this.popupVisible = false;
    this.overflowVisible = true;
  }




}