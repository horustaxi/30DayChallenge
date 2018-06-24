import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RetrieveDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RetrieveDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RetrieveDataProvider Provider');
  }

  getData(){

    return this.http.get('../../assets/data/data.json');
  }

}
