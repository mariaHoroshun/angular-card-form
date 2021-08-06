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

export class SummatyDataItem{
  constructor(
  public ID: number,
  public arrayData : string,
  public status : string,
  public amount1 : string,
  public disabled1 : string,
  public link1 : string,
  public amount2 : string,
  public disabled2 : string,
  public link2 : string,
  public isLinked : string){}
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
  "field1" : "",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
}
,{
  "ID": 3,
  "name": "ПС 35 кВ Покровка-II (МРСК)",
  "field1" : "",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 4,
  "name": "ПС 35 кВ Линевская (МРСК)",
  "field1" : "ПС 220 кВ Гипсовая",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Нижегородское ПМЭС"
},{
  "ID": 5,
  "name": "Троицкая Грэс",
  "field1" : "",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Нижегородское ПМЭС"
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
  "field1" : "ПС 220 кВ Гипсовая",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Нижегородское ПМЭС"
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
  "field1" : "",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Нижегородское ПМЭС"
},{
  "ID": 10,
  "name": "	ПС 10 кВ СП-10 от ВЛ 10-01 Нида-Рыбачий",
  "field1" : "",
  "field2" : "МЭС Волги",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 11,
  "name": "ПС ЭЧЭ-38 Горбуново-2 (Курган)",
  "field1" : "ПС 220 кВ Гипсовая",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "Средне-Волжское",
  "field5" : "Средне-Волжское ПМЭС"
},{
  "ID": 12,
  "name": "ПС 110 кВ Акбулакская (МРСК)",
  "field1" : "Кроношпан",
  "field2" : "МЭС Волги",
  "field3" : "МЭС Центра",
  "field4" : "Средне-Волжское",
  "field5" : "Средне-Волжское ПМЭС"
},{
  "ID": 13,
  "name": "ПС 110 кВ Акбулакская (МРСК)",
  "field1" : "Кроношпан",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 14,
  "name": "Троицкая Грэс",
  "field1" : "",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Нижегородское ПМЭС"
},{
  "ID": 15,
  "name": "	ПС 10 кВ СП-10 от ВЛ 10-01 Нида-Рыбачий",
  "field1" : "",
  "field2" : "МЭС Волги",
  "field3" : "МЭС Центра",
  "field4" : "АТС",
  "field5" : "Московское ПМЭС"
},{
  "ID": 16,
  "name": "ПС ЭЧЭ-38 Горбуново-2 (Курган)",
  "field1" : "ПС 220 кВ Гипсовая",
  "field2" : "МГЛЭП",
  "field3" : "МЭС Центра",
  "field4" : "Средне-Волжское",
  "field5" : "Средне-Волжское ПМЭС"
},{
  "ID": 17,
  "name": "ПС 110 кВ Акбулакская (МРСК)",
  "field1" : "Кроношпан",
  "field2" : "МЭС Волги",
  "field3" : "МЭС Центра",
  "field4" : "Средне-Волжское",
  "field5" : "Средне-Волжское ПМЭС"
}]

let summaryTableDataItems : SummatyDataItem[] = [{
  "ID": 1,
  "arrayData": "ТР/ТСН",
  "status" : "ОТСУТСТВУЮТ ДАННЫЕ ДЛЯ СВЯЗИ",
  "amount1" : "0",
  "disabled1" : "0",
  "link1": "0",
  "amount2" : "0",
  "disabled2": "0",
  "link2" : "0",
  "isLinked": "0"
},{
  "ID": 2,
  "arrayData": "Реакторы",
  "status" : "ОТСУТСТВУЮТ ДАННЫЕ ДЛЯ СВЯЗИ",
  "amount1" : "0",
  "disabled1" : "0",
  "link1": "0",
  "amount2" : "0",
  "disabled2": "0",
  "link2" : "0",
  "isLinked": "0"
},{
  "ID": 3,
  "arrayData": "Приборы учёта",
  "status" : "НЕТ СВЯЗИ",
  "amount1" : "2",
  "disabled1" : "0",
  "link1": "0",
  "amount2" : "2",
  "disabled2": "0",
  "link2" : "0",
  "isLinked": "0"
}]

@Injectable()
export class TableDataService {
  getData(){
    return dataItems;
  }
  getSummaryTableData(){
    return summaryTableDataItems;
  }
}
