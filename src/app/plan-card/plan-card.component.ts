import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.css']
})
export class PlanCardComponent implements OnInit {

  popupVisible = true;

  constructor(private _router : Router) { }

  closeInfo() {
    this._router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
