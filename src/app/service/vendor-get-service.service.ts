import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class VendorGetServiceService {

  constructor(private http:HttpClient) { }

  getServices(){
    return this.http.get(`${baseUrl}/user/vendorHouseService`)
  }
  getDoctorServices(){
    return this.http.get(`${baseUrl}/user/mentalList`)
  }
  getLegalServices(){
    return this.http.get(`${baseUrl}/user/legalList`)
  }
  getAssistantServices(){
    return this.http.get(`${baseUrl}/user/assistantList`)
  }
  getWaterServices(){
    return this.http.get(`${baseUrl}/user/waterList`)
  }
  public getAccomodationServices(id:any){
    return this.http.get(`${baseUrl}/serviceAppartment/${id}`);
  }
  public getAppartmentServices(){
    return this.http.get(`${baseUrl}/user/apartmentList`);
  }
  public getWorkServices(){
    return this.http.get(`${baseUrl}/user/workList`);
  }
}
