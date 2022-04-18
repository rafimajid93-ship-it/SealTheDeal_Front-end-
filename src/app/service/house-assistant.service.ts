import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class HouseAssistantService {

  constructor(private http:HttpClient) { }
  addHouseAssistant(assistant:any){
    return this.http.post(`${baseUrl}/user/houseAssistant`,assistant)
  }
  getAssistant(){
    return this.http.get(`${baseUrl}/user/validAssistant`)
  }
}
