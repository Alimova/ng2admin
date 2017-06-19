import {Component} from '@angular/core';

import {BasicTablesService} from '../../basicTables.service';

@Component({
  selector: 'striped-table',
  templateUrl: './stripedTable.html'
})
export class StripedTable {

  smartTableData:Array<any>;

  constructor(public basicTablesService: BasicTablesService) {
    // this.smartTableData = _basicTablesService.smartTableData;

  }
}
