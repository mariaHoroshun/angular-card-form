import { Component, OnInit } from '@angular/core';
import { AisMeters, MetersService, MscpMeters } from '../meters.service';

@Component({
  selector: 'app-meters-page',
  templateUrl: './meters-page.component.html',
  styleUrls: ['./meters-page.component.css'],
  providers: [MetersService]
})
export class MetersPageComponent implements OnInit {

  mscpMeters: MscpMeters[];
  aisMeters: AisMeters[];

  pickedMscpMeters: MscpMeters | undefined | null;
  pickedAisMeters: AisMeters | undefined | null;

  isBinded: boolean;

  constructor(service: MetersService) {
    this.mscpMeters = service.getMscpMeters();
    this.aisMeters = service.getAisMeters();
    this.isBinded = false;
  }

  //selected rows

  selectionChangedAis(e: any): void {
    if (!e.selectedRowsData || e.selectedRowsData.length == 0) {
      this.pickedAisMeters = null;
      return;
    }
    this.pickedAisMeters = e.selectedRowsData[0];
  }

  selectionChangedMscp(e: any): void {
    if (!e.selectedRowsData || e.selectedRowsData.length == 0) {
      this.pickedMscpMeters = null;
      return;
    }
    this.pickedMscpMeters = e.selectedRowsData[0];
  }

  //selection check

  isBothSelectedAis(currentObj: AisMeters | null | undefined): boolean {
    if (this.pickedAisMeters && this.pickedMscpMeters) {
      return this.pickedAisMeters?.ID == currentObj?.ID;
    }
    return false;
  }

  isBothSelectedMscp(currentObj: MscpMeters | null | undefined): boolean {
    if (this.pickedAisMeters && this.pickedMscpMeters) {
      return this.pickedMscpMeters?.ID == currentObj?.ID;
    }
    return false;
  }

  /* isCellSelected(currentAisMeters: ): boolean {
    return this.pickedAisTrInfoItem?.ID == currentAisTr?.ID;
  } */

  //bind

  bind() {
    if (this.pickedAisMeters && this.pickedMscpMeters) {
      this.pickedMscpMeters.aisItem = this.pickedAisMeters;
      this.pickedMscpMeters.isLinked = true;

      //delete from ais array
      const copyAis = this.aisMeters ? this.aisMeters.map(a => a) : [];
      this.aisMeters = copyAis.filter(x => x != this.pickedAisMeters);

      this.refreshDataGrid();
    }
  }

  //delete
  delete(currentMscpMeter: MscpMeters) {
    if (currentMscpMeter.aisItem) {
      this.aisMeters.splice(0, 0, currentMscpMeter.aisItem);
      currentMscpMeter.aisItem = null;
      currentMscpMeter.isLinked = false;

      this.refreshDataGrid;
    }
  }

  refreshDataGrid(): void {
    const mscpMetersCopy = new Array<MscpMeters>();
    this.mscpMeters.forEach(i => mscpMetersCopy.push(i));
    this.mscpMeters = mscpMetersCopy;
  }



  test() {
    var a = this.isBothSelectedMscp(this.pickedMscpMeters);
    if (a) {
      console.log("yes")
    } else {
      console.log("no")
    }
  }

  ngOnInit(): void {
  }

}
