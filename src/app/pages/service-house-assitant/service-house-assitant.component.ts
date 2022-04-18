import { Component, OnInit } from '@angular/core';
import { VendorGetServiceService } from 'src/app/service/vendor-get-service.service';

@Component({
  selector: 'app-service-house-assitant',
  templateUrl: './service-house-assitant.component.html',
  styleUrls: ['./service-house-assitant.component.css']
})
export class ServiceHouseAssitantComponent implements OnInit {

  constructor(private vendorGetService:VendorGetServiceService) { }
  displayedColumns: string[] = ['id', 'status', 'actions'];
  
  assistant:any
  ngOnInit(): void {
  this.vendorGetService.getAssistantServices().subscribe(
    (data)=>{
      this.assistant=data;
      console.log(data);

    },
    (error)=>{

    }
  )
  }

}
