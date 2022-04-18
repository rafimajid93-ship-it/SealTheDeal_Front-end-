import { Component, OnInit } from '@angular/core';
import { VendorGetServiceService } from 'src/app/service/vendor-get-service.service';

@Component({
  selector: 'app-service-accomodation2',
  templateUrl: './service-accomodation2.component.html',
  styleUrls: ['./service-accomodation2.component.css']
})
export class ServiceAccomodation2Component implements OnInit {

  constructor(private vendorGetService:VendorGetServiceService) { }
  displayedColumns: string[] = ['id', 'status', 'actions'];
  
  apartment:any
  ngOnInit(): void {
  this.vendorGetService.getAppartmentServices().subscribe(
    (data)=>{
      this.apartment=data;
      console.log(data);

    },
    (error)=>{

    }
  )
  }
}
