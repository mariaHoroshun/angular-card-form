import { Injectable } from '@angular/core';

export class AisTrInfo {
  constructor(
    public ID: string | null,
    public name: string,
    public type: string,
    public group: string,
    public usedOnVn: boolean,
    public code: string
  ) { }
}

export class MscpTr {
  constructor(
    public ID: string | null,
    public name: string,
    public isLinked: boolean,
    public aisTrs: AisTrInfo[] = []
  ) { }

  get aisNames(): string {
    let _aisNames = '';
    if (this.aisTrs) {
      for (var i = 0; i < this.aisTrs.length; i++) {
        if (_aisNames.length > 0) {
          _aisNames += ", ";
        }
        _aisNames += this.aisTrs[i].name;
      }
    }
    return _aisNames;
  }
}

let aisTrInfoItems: AisTrInfo[] = [{
  "ID": "1",
  "name": "Т-3",
  "type": "ТРДЦН-63000/220/10",
  "group": "Силовой",
  "usedOnVn": false,
  "code": "290"
}, {
  "ID": "2",
  "name": "ТСН-1",
  "type": "ТМ-400/10/0,4",
  "group": "ТСН",
  "usedOnVn": false,
  "code": "291"
}, {
  "ID": "3",
  "name": "ТРДЦН-63000",
  "type": "Т78400/10/0,4",
  "group": "8К",
  "usedOnVn": false,
  "code": "292"
}, {
  "ID": "4",
  "name": "ТХН",
  "type": "ТМ-630/10/0,4",
  "group": "ТСН",
  "usedOnVn": false,
  "code": "295"
}, {
  "ID": "5",
  "name": "ТСН-3",
  "type": "ТМ-400/10/0,4",
  "group": "ТСН",
  "usedOnVn": false,
  "code": "297"
}]

let mscpTrItems: MscpTr[] = [
    new MscpTr("6", "Т-1, ТРДЦН-63000/220-У1", false, []),
    new MscpTr("7", "ТСН-1-0,4кВ, ТМ 400/10", false, [])
]

@Injectable()
export class TrService {

  constructor() { }

  getAisTrInfo() {
    return aisTrInfoItems;
  }

  getMscpTrInfo() {
    return mscpTrItems;
  }
}
