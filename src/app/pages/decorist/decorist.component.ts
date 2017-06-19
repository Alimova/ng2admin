import { Component } from '@angular/core';
import { Http } from '@angular/http'; 
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'decorist',
  templateUrl: './decorist.html'
  // template: `<strong>My page content here</strong>`,
})
export class DecoristComponent {
  subscriber;
  designers;
  constructor(private http: Http) {}

fetchDesignersAPI(){
  // debugger;
   this.subscriber = 
    this.http
    .get('http://localhost:8000/v1/designers-root/designers/?limit=10&offset=10')
    .map(res => res.json())
    .subscribe(response => {
      // console.log(response.results[0].full_name)
      this.designers = response;
      // response.forEach(full_name => console.log(`Full name: ${full_name}`));
    }
    );
    return this.designers;
}
check(){
  console.log(this.designers);
}



}

