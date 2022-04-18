import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EmployeerService {

  constructor(private http:HttpClient) {}
  addEmployeer(employeer:any){
    return this.http.post(`${baseUrl}/user/employeer`,employeer)
  }
  addWork(work:any){
    return this.http.post(`${baseUrl}/user/work`,work)
  }
  getEmployeer(){
    return this.http.get(`${baseUrl}/user/validEmployeer`)
  }
  getWork(){
    return this.http.get(`${baseUrl}/getAllWork`)
  }
}
