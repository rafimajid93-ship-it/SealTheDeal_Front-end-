import { Component, OnInit } from '@angular/core';
import { VendorGetServiceService } from 'src/app/service/vendor-get-service.service';

@Component({
  selector: 'app-service-legal',
  templateUrl: './service-legal.component.html',
  styleUrls: ['./service-legal.component.css']
})
export class ServiceLegalComponent implements OnInit {

  constructor(private vendorGetService:VendorGetServiceService) { }
  displayedColumns: string[] = ['id', 'status', 'actions'];
  
  legal:any
  ngOnInit(): void {
  this.vendorGetService.getLegalServices().subscribe(
    (data)=>{
      this.legal=data;
      console.log(data);

    },
    (error)=>{

    }
  )
  }

}
