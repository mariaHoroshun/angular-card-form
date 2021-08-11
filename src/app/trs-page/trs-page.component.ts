import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { AisTrInfo, MscpTr, TrService } from '../tr.service';
import { DataGridHelper } from './dataGridHelper';

@Component({
  selector: 'app-trs-page',
  templateUrl: './trs-page.component.html',
  styleUrls: ['./trs-page.component.css'],
  providers: [TrService]
})
export class TrsPageComponent implements OnInit {

  mscpTable = document.getElementById("mscpTable");

  aisTrInfoItems: AisTrInfo[];
  mscpTrItems: MscpTr[];

  pickedAisTrInfoItem: AisTrInfo | undefined | null;
  pickedMscpTrItem: MscpTr | undefined | null;

  isBinded: boolean;


  constructor(service: TrService) {
    this.aisTrInfoItems = service.getAisTrInfo();
    this.mscpTrItems = service.getMscpTrInfo();
    this.isBinded = false;
  }

  //selected rows

  selectionChangedAis(e: any): void {
    if (!e.selectedRowsData || e.selectedRowsData.length === 0) {
      this.pickedAisTrInfoItem = null;
      return;
    }

    this.pickedAisTrInfoItem = e.selectedRowsData[0];
  }

  selectionChangedMscp(e: any): void {
    if (!e.selectedRowsData || e.selectedRowsData.length === 0) {
      this.pickedMscpTrItem = null;
      return;
    }

    this.pickedMscpTrItem = e.selectedRowsData[0];
  }

  isBothSelected(currentAisTr: AisTrInfo): boolean {
    if (this.pickedAisTrInfoItem && this.pickedMscpTrItem) {
      return this.pickedAisTrInfoItem?.ID == currentAisTr?.ID;
    }
    return false
  }

  isBothSelected2(currentMscpTr: MscpTr | null | undefined): boolean {
    if (this.pickedMscpTrItem && this.pickedAisTrInfoItem) {
      return this.pickedMscpTrItem?.ID == currentMscpTr?.ID;
    }
    return false
  }

  isCellSelected(currentAisTr: AisTrInfo): boolean {
    return this.pickedAisTrInfoItem?.ID == currentAisTr?.ID;
  }

  bind() {
    if (this.pickedMscpTrItem && this.pickedAisTrInfoItem) {
      this.pickedMscpTrItem.aisTrs.push(this.pickedAisTrInfoItem);
      this.pickedMscpTrItem.isLinked = true;
      const copyAis = this.aisTrInfoItems ? this.aisTrInfoItems.map(x => x) : [];
      this.aisTrInfoItems = copyAis.filter(copy => copy != this.pickedAisTrInfoItem);

      this.refreshDataGrid();
    }
  }

  refreshDataGrid(): void {
    const mscpTrItemsCopy = new Array<MscpTr>();
    this.mscpTrItems.forEach(i => mscpTrItemsCopy.push(i));
    this.mscpTrItems = mscpTrItemsCopy;

    const aisTrItemsCopy = new Array<AisTrInfo>();
    this.aisTrInfoItems.forEach(i => aisTrItemsCopy.push(i));
    this.aisTrInfoItems = aisTrItemsCopy;
  }

  isBindedMetod() {
    if (this.isBinded == true) {
      return true;
    } else {
      return false
    }
  }

  isMscpReadyToLink(mscpTr: MscpTr): boolean {
    return !(this.pickedMscpTrItem?.ID === mscpTr.ID);
  }

  isLinkToDisabled(currentMscpTr: MscpTr): boolean {
    return !(this.pickedMscpTrItem?.ID === currentMscpTr.ID && this.pickedAisTrInfoItem);
  }

  //delete

  delete(parentMscpTr: MscpTr, currentAisTr: AisTrInfo) {
    const copyTrs = parentMscpTr.aisTrs ? parentMscpTr.aisTrs.map(x => x) : [];
    parentMscpTr.aisTrs = copyTrs.filter(copy => copy != currentAisTr);
    parentMscpTr.isLinked = false;
    
    //add to ais array back
    this.aisTrInfoItems.push(currentAisTr);

    this.refreshDataGrid();
  }

  /* findObj(obj: AisTrInfo, list: AisTrInfo[]): boolean{
    for (var i = 0; i <list.length; i++){
      if (list[i] == obj){
        return true;
      }
    }
    return false;
  } */

  logItem(currentAisTr: AisTrInfo): string {
    return currentAisTr?.name;
  }

  //change Buttons

  isAisEnable(isEnabled : boolean){
    if(this.pickedAisTrInfoItem?.usedOnVn){
      this.pickedAisTrInfoItem!.usedOnVn = false;
    }else{
      this.pickedAisTrInfoItem!.usedOnVn = true;
    }
    this.refreshDataGrid();
  }

  //set style
  cellPrepared(event: any): void {
    DataGridHelper.prototype.setStyle(event);

  }

test(){
  var a = this.isBothSelected2(this.pickedMscpTrItem);
  if(a){
    console.log("yes")
  }else{
    console.log("no")
  }
}

  ngOnInit(): void {
  }
}
