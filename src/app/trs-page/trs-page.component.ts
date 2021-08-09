import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { AisTrInfo, MscpTr, TrService } from '../tr.service';

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

  //sekected rows

  selectionChangedAis(e: any): void {
    this.pickedAisTrInfoItem = e.selectedRowsData;
  }

  selectionChangedMscp(e: any): void {
    this.pickedMscpTrItem = e.selectedRowsData;
  }

  isBothSelected() {
    if (this.pickedAisTrInfoItem != undefined && this.pickedMscpTrItem != undefined) {
      return true
    } else {
      return false
    }
  }

  bind() {
    if (this.pickedAisTrInfoItem != null && this.pickedAisTrInfoItem != undefined) {
      this.pickedMscpTrItem?.aisTrs[0] = this.pickedAisTrInfoItem;
      //this.pickedMscpTrItem?.aisTrs.push(this.pickedAisTrInfoItem);
      this.isBinded = true
    }
  }

  isBindedMetod(){
    if(this.isBinded == true){
      return true;
    }else{
      return false
    }
  }

  ngOnInit(): void {
  }

}
