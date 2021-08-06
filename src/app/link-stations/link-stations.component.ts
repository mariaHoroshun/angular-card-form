import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-stations',
  templateUrl: './link-stations.component.html',
  styleUrls: ['./link-stations.component.css']
})
export class LinkStationsComponent implements OnInit {

  popupVisible = true;

  constructor(private _router : Router) { }

  closeLinkModal() {
    this._router.navigate(['plan/summary']);
  }

  ngOnInit(): void {
  }

}
