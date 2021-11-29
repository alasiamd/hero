import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  url:string = 'https://superheroapi.com/api/';
  apiToken:string = '4615359005174115/';

  
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    })
    
  };

  // httpOptions = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'access-control-allow-origin': '*'
  //   }
  // };

  constructor(private http:HttpClient) { }

  getHero(id:number):Observable<any> { 
    const miUrl = `${this.url}${this.apiToken}${id}`
    return this.http.get<any>(miUrl, this.httpOptions);
  }
}
