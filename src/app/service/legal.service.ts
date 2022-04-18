import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class LegalService {

  constructor(private http:HttpClient) { }
  addLegal(legal:any){
    return this.http.post(`${baseUrl}/user/legal`,legal)
  }
  getLegal(){
    return this.http.get(`${baseUrl}/user/validLegal`)
  }
}
