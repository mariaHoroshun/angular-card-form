import { Injectable } from '@angular/core';

export class MscpReactor{
  constructor(
    public ID: string | null,
    public name : string,
    public isLinked: boolean,
    public aisReactors: AisReactor[] = []
  ){}

  get aisNames():string{
    let _aisNames = '';
    if(this.aisReactors){
      for (var i = 0; i < this.aisReactors.length; i++) {
        if (_aisNames.length > 0) {
          _aisNames += ", ";
        }
        _aisNames += this.aisReactors[i].name;
      }
    }
    return _aisNames;
  }
}

export class AisReactor{
  constructor(
    public ID : string | null,
    public name: string,
    public type: string,
    public voltage: number,
    public code: number,
    public isEnabled: boolean
  ){}
}

let aisReactorItems: AisReactor[] = [
  new AisReactor("1", "Р-2-500 ф.В", "РОМБСМ-60000/500", 500, 123, true),
  new AisReactor("2", "Р-2-500 ф.А", "РОМБСМ-60000/500", 500, 124, true),
  new AisReactor("3", "Р-2-500 ф.C", "РОМБСМ-60000/500", 500, 125, true),
  new AisReactor("4", "Р-2-500 ф.D", "РОМБСМ-60000/500", 500, 126, true)
]

let mscpReactorItems: MscpReactor[] = [
  new MscpReactor("8", "3*(ШР-500) РОМБСМ-60000/500", false, []),
  new MscpReactor("9", "2*(ШР-500) РОМБСМ-60000/500", false, []),
]

export class ReactorsService {

  constructor() { }

  getAisReactors(){
    return aisReactorItems;
  }

  getMscpReactors(){
    return mscpReactorItems;
  }
}
