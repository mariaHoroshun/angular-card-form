import { Component, OnInit } from '@angular/core';
import { AisReactor, MscpReactor, ReactorsService } from '../reactors.service';
import { DataGridHelper } from '../trs-page/dataGridHelper';
import { DataGridHelperReact } from './dataGridHelperReact';

@Component({
  selector: 'app-reactors-page',
  templateUrl: './reactors-page.component.html',
  styleUrls: ['./reactors-page.component.css'],
  providers: [ReactorsService]
})
export class ReactorsPageComponent implements OnInit {

  mscpReactorItems: MscpReactor[];
  aisReactorItems: AisReactor[];

  pickedMscpReactor: MscpReactor | null | undefined;
  pickedAisReactor: AisReactor | null | undefined;
  isBinded: boolean;

  isSelectedRowIncluded = true;


  constructor(service: ReactorsService) {
    this.aisReactorItems = service.getAisReactors();
    this.mscpReactorItems = service.getMscpReactors();
    this.isBinded = false;
  }

  selectionChangedAis(e: any): void {
    if (!e.selectedRowsData || e.selectedRowsData.length === 0) {
      this.pickedAisReactor = null;
      return;
    }

    this.pickedAisReactor = e.selectedRowsData[0];
    this.isSelectedRowIncluded = this.pickedAisReactor!.isEnabled;
    console.log(this.isSelectedRowIncluded)
  }

  selectionChangedMscp(e: any): void {
    if (!e.selectedRowsData || e.selectedRowsData.length === 0) {
      this.pickedMscpReactor = null;
      return;
    }

    this.pickedMscpReactor = e.selectedRowsData[0];
  }

  isBothSelectedAis(currentAisReactor: AisReactor): boolean {
    if (this.pickedAisReactor && this.pickedMscpReactor) {
      return this.pickedAisReactor?.ID == currentAisReactor?.ID;
    }
    return false
  }

  isBothSelectedMscp(currentMscpReactor: MscpReactor | null | undefined): boolean {
    if (this.pickedMscpReactor && this.pickedAisReactor) {
      return this.pickedMscpReactor?.ID === currentMscpReactor?.ID;
    }
    return false;
  }

  isCellSelected(currentAisReactor: AisReactor): boolean {
    return this.pickedAisReactor?.ID === currentAisReactor?.ID;
  }

  //bind
  bind() {
    if (this.pickedMscpReactor && this.pickedAisReactor) {
      this.pickedMscpReactor.aisReactors.push(this.pickedAisReactor);
      this.pickedMscpReactor.isLinked = true;
      const copyAis = this.aisReactorItems ? this.aisReactorItems.map(x => x) : [];
      this.aisReactorItems = copyAis.filter(copy => copy != this.pickedAisReactor);

      this.refreshDataGrid();
    }
  }

  refreshDataGrid(): void {
    const mscpTrItemsCopy = new Array<MscpReactor>();
    this.mscpReactorItems.forEach(i => mscpTrItemsCopy.push(i));
    this.mscpReactorItems = mscpTrItemsCopy;
  }

  refreshAisData(){
    const aisReactorsCopy = new Array<AisReactor>();
    this.aisReactorItems.forEach(i => aisReactorsCopy.push(i));
    this.aisReactorItems = aisReactorsCopy;
  }

  isBindedMetod() {
    if (this.isBinded == true) {
      return true;
    } else {
      return false
    }
  }

  isMscpReadyToLink(mscpReactor: MscpReactor): boolean {
    return !(this.pickedMscpReactor?.ID === mscpReactor.ID);
  }

  isLinkToDisabled(currentMscpTr: MscpReactor): boolean {
    return !(this.pickedMscpReactor?.ID === currentMscpTr.ID && this.pickedAisReactor);
  }

  delete(parentMscpReactor: MscpReactor, currentAisReactor: AisReactor) {
    const copyTrs = parentMscpReactor.aisReactors ? parentMscpReactor.aisReactors.map(x => x) : [];
    parentMscpReactor.aisReactors = copyTrs.filter(copy => copy != currentAisReactor);
    parentMscpReactor.isLinked = false;

    //add to ais array back
    this.aisReactorItems.push(currentAisReactor);

    this.refreshDataGrid();
  }

  logItem(currentAisTr: AisReactor): string {
    return currentAisTr?.name;
  }

  //change Buttons

  switchAis(isEnabled: boolean): void {
    this.pickedAisReactor!.isEnabled = !isEnabled;
    this.refreshAisData()
  }

  cellPrepared(event: any): void {
    DataGridHelperReact.prototype.setStyle(event);
  }

  rowPrepared(event: any): void {
    DataGridHelperReact.prototype.setRowStyle(event);
  }


  ngOnInit(): void {
  }

}
