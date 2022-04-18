import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-view-apartment',
  templateUrl: './view-apartment.component.html',
  styleUrls: ['./view-apartment.component.css']
})
export class ViewApartmentComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  apartments:any
  ngOnInit(): void {
  this.vendorService.getApartment().subscribe(
    (data)=>{
      this.apartments=data;

    },
    (error)=>{

    }
  )
  }

 
  

}
