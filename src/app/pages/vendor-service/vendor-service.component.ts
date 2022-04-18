import { Component, OnInit } from '@angular/core';
import { VendorGetServiceService } from 'src/app/service/vendor-get-service.service';

@Component({
  selector: 'app-vendor-service',
  templateUrl: './vendor-service.component.html',
  styleUrls: ['./vendor-service.component.css']
})
export class VendorServiceComponent implements OnInit {

  constructor(private vendorGetService:VendorGetServiceService) { }

  displayedColumns: string[] = ['id', 'status', 'actions'];


  HouseService:any
  ngOnInit(): void {
  this.vendorGetService.getServices().subscribe(
    (data)=>{
      this.HouseService=data;
      console.log(data);

    },
    (error)=>{

    }
  )
  }
}
