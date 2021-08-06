import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { SummatyDataItem, TableDataService } from '../table-data.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  dataSummaryItems : SummatyDataItem[];

  constructor(service: TableDataService){
    this.dataSummaryItems = service.getSummaryTableData();
  }


  ngOnInit(): void {
  }

}
