import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }
  addDoctor(doctor:any){
    return this.http.post(`${baseUrl}/user/doctor`,doctor)
  }
  getDoctor(){
    return this.http.get(`${baseUrl}/user/validDoctor`)
  }
  addAppointment(doctor:any){
    return this.http.post(`${baseUrl}/user/dAppoinment`,doctor)
  }

}
