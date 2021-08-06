import { Component, OnInit } from '@angular/core';
import { AisTrInfo, MscpTr, TrService } from '../tr.service';

@Component({
  selector: 'app-trs-page',
  templateUrl: './trs-page.component.html',
  styleUrls: ['./trs-page.component.css'],
  providers: [TrService]
})
export class TrsPageComponent implements OnInit {

  aisTrInfoItems: AisTrInfo[];
  mscpTrItems: MscpTr[];

  constructor(service: TrService) {
    this.aisTrInfoItems = service.getAisTrInfo();
    this.mscpTrItems = service.getMscpTrInfo();
  }

  bind() {
  }

  ngOnInit(): void {
  }

}
