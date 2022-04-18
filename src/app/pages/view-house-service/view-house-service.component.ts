import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-house-service',
  templateUrl: './view-house-service.component.html',
  styleUrls: ['./view-house-service.component.css']
})
export class ViewHouseServiceComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  services:any
  ngOnInit(): void {
    this.vendorService.getHouseService().subscribe(
      (data:any)=>{
        this.services = data;
        console.log(data);
      },
      (error)=>{
        console.log(error)
        Swal.fire("Error","Can not load data.","error")
      }
    )
  }
  houseService(r:any){
    this.vendorService.ServiceHelp(r).subscribe(
      (data)=>{
        Swal.fire("Requested","","success")
    },
    (error)=>{
      Swal.fire("Error","Please try again","error")
    }
    )
    console.log(r.id)

  }

}
