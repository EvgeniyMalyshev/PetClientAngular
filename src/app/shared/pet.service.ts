import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Pet} from './pet.project';
@Injectable()
export class AppPetService {
  selectedPet: Pet;
  petList: Pet[];
  constructor(private http: Http) { }

  postPet(pet: Pet) {
    console.log(pet);
    var body = JSON.stringify(pet);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    //return this.http.post('https://petshop-application.herokuapp.com/api',body,requestOptions).map(x => x.json());
    return this.http.post('http://localhost:8080/api',body,requestOptions).map(x => x.json());
  }

  putPet(id, pet) {
    var body = JSON.stringify(pet);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    //return this.http.put('https://petshop-application.herokuapp.com/api/' + id,
    return this.http.put('http://localhost:8080/api/' + id,
      body,
      requestOptions).map(res => res.json());
  }
  getPetList(){
    //this.http.get('https://petshop-application.herokuapp.com/api')

    this.http.get('http://localhost:8080/api')
      .map((data : Response) =>{
        return data.json() as Pet[];
      }).toPromise().then(x => {
      this.petList = x;
      console.log(this.petList);
    })
  }

  deletePet(id: number) {
    //return this.http.delete('https://petshop-application.herokuapp.com/api/' + id).map(res => res.json());
    return this.http.delete('http://localhost:8080/api/' + id).map(res => res.json());
  }

}
