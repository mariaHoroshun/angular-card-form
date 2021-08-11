import { Injectable } from '@angular/core';

export class MscpMeters{
  constructor(
    public ID: string | null,
    public name: string,
    public aisItem: AisMeters | null,
    public isLinked: boolean,
  ){}
}

export class AisMeters{
  constructor(
    public ID: string | null,
    public name: string,
    public model: string,
    public startingDate: string,
    public endingDate: string,
    public isEnabled: boolean
  ){}
}

let mscpMeters: MscpMeters[]=[
  new MscpMeters("8", "АТ-2 110", null, false),
  new MscpMeters("9", "Ввод 10 кВ ТСН-4", null, false),
  new MscpMeters("10", "АТ-2 110", null, false)
]

let aisMeters : AisMeters[] = [
  new AisMeters("1", "ВЛ 110 кВ ОТЭЦ", "L&G / ZMD402CT41.0467S2 CU-B4", "10.02.2022", "28.09.2023", true),
  new AisMeters("2", "ТСН-2", "L&G / ZMD402CT41.0467S2 CU-B4", "10.02.2022", "28.09.2023", true),
  new AisMeters("3", "ТСН-1", "L&G / ZMD402CT41.0467S2 CU-B4", "10.02.2022", "28.09.2023", true),
  new AisMeters("4", "ТХН-4", "L&G / ZMD402CT41.0467S2 CU-B4", "10.02.2022", "28.09.2023", true),
  new AisMeters("5", "ВЛ-110 Городская II", "L&G / ZMD402CT41.0467S2 CU-B4", "10.02.2022", "28.09.2023", true),
]

@Injectable()
export class MetersService {
  constructor() { }

  getMscpMeters(){
    return mscpMeters;
  }

  getAisMeters(){
    return aisMeters;
  }

}
