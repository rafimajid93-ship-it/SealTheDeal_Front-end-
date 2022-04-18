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
  getConsumer(){
    return this.http.get(`${baseUrl}/user/validConsumer`)
  }
  getUser(){
    return this.http.get(`${baseUrl}/user/validUser`)
  }
  addApartment(apartment:any){
    return this.http.post(`${baseUrl}/user/apartment`,apartment)
  }
  addWork(work:any){
    return this.http.post(`${baseUrl}/user/applyWork`,work)
  }

  addFurniture(furniture:any){
    return this.http.post(`${baseUrl}/user/furniture`,furniture)
  }

  addProduct(product:any){
    return this.http.post(`${baseUrl}/user/product`,product)
  }
  addAds(ads:any){
    return this.http.post(`${baseUrl}/user/ads`,ads)
  }
  addWater(water:any){
    return this.http.post(`${baseUrl}/user/water`,water)
  }
  addHouseService(houseService:any){
    return this.http.post(`${baseUrl}/user/houseSupport`,houseService)
  }
  assitantHelp(houseAssistant:any){
    return this.http.post(`${baseUrl}/user/assistantApp`,houseAssistant)
  }
  LegalHelp(Legal:any){
    return this.http.post(`${baseUrl}/user/legalApp`,Legal)
  }
  ServiceHelp(house:any){
    return this.http.post(`${baseUrl}/user/houseServiceApp`,house)
  }

  getFurniture(){
    return this.http.get(`${baseUrl}/getAllFurniture`)
  }
  getProduct(){
    return this.http.get(`${baseUrl}/getAllProduct`)
  }
  getApartment(){
    return this.http.get(`${baseUrl}/getAllApartment`)
  }
  getDoctor(){
    return this.http.get(`${baseUrl}/getAllDoctor`)
  }
  getHouseAssistant(){
    return this.http.get(`${baseUrl}/getAllAssistant`)
  }
  getLegal(){
    return this.http.get(`${baseUrl}/getAllLegal`)
  }
  getHouseService(){
    return this.http.get(`${baseUrl}/getAllService`)
  }
  getWater(){
    return this.http.get(`${baseUrl}/getAllWater`)
  }
  orderWater(r:any){
    return this.http.post(`${baseUrl}/user/orderWater`,r)
  }
  orderApartment(r:any){
    return this.http.post(`${baseUrl}/user/orderApartment`,r)
  }

  getAds(){
    return this.http.get(`${baseUrl}/getAllAds`)
  }
}
