import { Component, OnInit } from '@angular/core';
import { VendorGetServiceService } from 'src/app/service/vendor-get-service.service';

@Component({
  selector: 'app-service-water',
  templateUrl: './service-water.component.html',
  styleUrls: ['./service-water.component.css']
})
export class ServiceWaterComponent implements OnInit {

  constructor(private vendorGetService:VendorGetServiceService) { }

  displayedColumns: string[] = ['id', 'quantity', 'actions'];
  
  water:any
  ngOnInit(): void {
  this.vendorGetService.getWaterServices().subscribe(
    (data)=>{
      this.water=data;
      console.log(data);

    },
    (error)=>{

    }
  )
  }

}
