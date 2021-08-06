import { Injectable } from '@angular/core';

/*@Injectable({
  providedIn: 'root'
})*/

export class AisTrInfo {
  constructor(
    public ID: number,
    public name: string,
    public type: string,
    public group: string,
    public usedOnVn: boolean,
    public code: string
  ) { }
}

export class MscpTr {
  constructor(
    public ID: number,
    public name: string,
    public isLinked: boolean,
    public aisTrs: AisTrInfo[]
  ) { }
}

let aisTrInfoItems: AisTrInfo[] = [{
  "ID": 1,
  "name": "Т-3",
  "type": "ТРДЦН-63000/220/10",
  "group": "Силовой",
  "usedOnVn": false,
  "code": "290"
},{
  "ID": 2,
  "name": "ТСН-1",
  "type": "ТМ-400/10/0,4",
  "group": "ТСН",
  "usedOnVn": false,
  "code": "291"
}]

let mscpTrItems : MscpTr[]=[{
  "ID" : 1,
  "name" : "Т-1, ТРДЦН-63000/220-У1",
  "isLinked": false,
  "aisTrs" : []
},{
  "ID" : 2,
  "name" : "ТСН-1-0,4кВ, ТМ 400/10",
  "isLinked": false,
  "aisTrs" : []
}]

@Injectable()
export class TrService {

  constructor() { }

  getAisTrInfo(){
    return aisTrInfoItems;
  }

  getMscpTrInfo(){
    return mscpTrItems;
  }
}
