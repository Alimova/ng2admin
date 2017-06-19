import { Injectable } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Http } from '@angular/http';

@Injectable()
export class BasicTablesService {


  smartTablePageSize = 10;
  subscriber;
  smartTableData: Array<any>;

  editableTableData: Array<any>;


  constructor(private http: Http) {
    this.fetchDesignersAPI();
  }

fetchDesignersAPI(){
   this.subscriber = 
    this.http
    .get('http://localhost:8000/v1/designers-root/designers/?limit=10&offset=10')
    .map(res => res.json())
    .subscribe(response => {
      this.smartTableData = response.results;
      // console.log(this.smartTableData);
      // this.editableTableData = this.smartTableData.slice(0, 36);
    }
  );
}

}
