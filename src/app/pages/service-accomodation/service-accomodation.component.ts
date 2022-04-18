import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { VendorGetServiceService } from 'src/app/service/vendor-get-service.service';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-service-accomodation',
  templateUrl: './service-accomodation.component.html',
  styleUrls: ['./service-accomodation.component.css']
})
export class ServiceAccomodationComponent implements OnInit {

  constructor(private vendorGetService:VendorGetServiceService,private route:ActivatedRoute,private ventureService:VendorService) { }
id:any
apartment:any
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    this.vendorGetService.getAccomodationServices(this.id).subscribe((data)=>{
     this.apartment=data
     console.log(data)
    },(error)=>{

    })
  }

  accom(r:any){
    this.ventureService.orderApartment(r).subscribe(
      (data)=>{
        Swal.fire("Requested","","success")
    },
    (error)=>{
      Swal.fire("Error","Can not load data.","error")
    }
    )
    console.log(r.id)

  }
}
