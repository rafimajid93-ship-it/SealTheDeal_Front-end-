import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http:HttpClient) { }
  addVendor(vendor:any){
    return this.http.post(`${baseUrl}/user/vendor`,vendor)
  }

  getVendor(){
    return this.http.get(`${baseUrl}/user/validVendor`)
  }
  addApartment(apartment:any){
    return this.http.post(`${baseUrl}/user/apartment`,apartment)
  }

}
