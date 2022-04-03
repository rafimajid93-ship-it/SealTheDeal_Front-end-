import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http:HttpClient) { }
  addConsumer(consumer:any){
    return this.http.post(`${baseUrl}/user/consumer`,consumer)
  }
}
