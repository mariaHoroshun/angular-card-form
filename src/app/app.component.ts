import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxPopupModule, DxButtonModule, DxTemplateModule, DxDateBoxModule } from 'devextreme-angular';
import { Schedule } from './sсhedule';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './new-styles.css']
})
export class AppComponent{
  title = 'angular-card-form';
  closeButtonOptions: any;

  constructor(
    private _router : Router){}

  showInfo() {
    this._router.navigate(['schedule']);
  }

  /*saveInfo(event : any): void {
    if (!event.validationGroup.validate()?.isValid) {
      return;
    }else{
    this.schedules.push(new Schedule(this.currentSchedule.year, this.currentSchedule.month, this.currentSchedule.planDate, this.currentSchedule.startNow, this.currentSchedule.station));
    }
  }
*/

}