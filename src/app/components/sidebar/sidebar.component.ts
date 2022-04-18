import { Component, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/service/consumer.service';
import { DoctorService } from 'src/app/service/doctor.service';
import { LegalService } from 'src/app/service/legal.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  flag=null;
  flag2=null;
  ngOnInit(): void {
    this.vendorService.getVendor().subscribe(
      (data:any)=>{
        console.log(data)
        this.flag=data.type;
      
      },
      (error)=>{}
    ) 
    this.vendorService.getUser().subscribe(
      (data:any)=>{
        console.log(data)
        this.flag2=data.role;
      
      },
      (error)=>{}
    ) 
  }

}
