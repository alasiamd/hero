import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Axios } from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = 'http://challenge-react.alkemy.org';

  constructor(private http: HttpClient
            //,private axios: Axios
    ) { }

  sentCerdentials(email:string, password:string):Observable<any> {

    const body = {
      email,
      password
    }    

    //return this.axios.post(`${this.URL}/auth/login`, body)

    return this.http.post(`${this.URL}`, body)
    
  }

}
