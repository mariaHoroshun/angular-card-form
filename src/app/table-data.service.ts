import { Injectable } from '@angular/core';

/*@Injectable({
  providedIn: 'root'
})*/

export class DataItem{
  constructor(
  public ID: number,
  public name : string,
  public field1 : string,
  public field2 : string,
  public field3 : string,
  public field4 : string,
  public field5 : string){}
}

let dataItems : DataItem[] = [{
  "ID": 1,
  "name": "Стенд ЭАК",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 2,
  "name": "ПС 110 кВ Акбулакская (МРСК)",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
}
,{
  "ID": 3,
  "name": "ПС 35 кВ Покровка-II (МРСК)",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 4,
  "name": "ПС 35 кВ Линевская (МРСК)",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 5,
  "name": "Троицкая Грэс",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 6,
  "name": "	ПС 10 кВ СП-10 от ВЛ 10-01 Нида-Рыбачий",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 7,
  "name": "ПС ЭЧЭ-38 Горбуново-2 (Курган)",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 8,
  "name": "ПС 110 кВ Акбулакская (МРСК)",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 9,
  "name": "Троицкая Грэс",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 10,
  "name": "	ПС 10 кВ СП-10 от ВЛ 10-01 Нида-Рыбачий",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 11,
  "name": "ПС ЭЧЭ-38 Горбуново-2 (Курган)",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 12,
  "name": "ПС 110 кВ Акбулакская (МРСК)",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
}]

@Injectable()
export class TableDataService {
  getData(){
    return dataItems;
  }
}
