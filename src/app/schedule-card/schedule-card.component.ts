import { Component, OnInit } from '@angular/core';
import { Schedule } from '../sсhedule';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.css']
})
export class ScheduleCardComponent implements OnInit {

  popupVisible = true;

  schedules: Schedule[] = [];
  
  currentSchedule: Schedule = {
    year: 2021,
    month: 12,
    planDate: new Date(),
    startNow: false,
    isAllStations: false,
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


  constructor(
    private _router : Router){
     /*const now = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(now.getDate() + 1);
      tomorrow.setHours(2, 0, 0, 0);
      this.year = now.getFullYear();
      this.month = now.getMonth();
*/

    }


  showInfo() {
    this.popupVisible = true;
  }

  closeInfo() {
    this._router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
