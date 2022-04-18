import { Component, OnInit } from '@angular/core';
import { VendorGetServiceService } from 'src/app/service/vendor-get-service.service';

@Component({
  selector: 'app-service-work',
  templateUrl: './service-work.component.html',
  styleUrls: ['./service-work.component.css']
})
export class ServiceWorkComponent implements OnInit {

  constructor(private vendorGetService:VendorGetServiceService) { }
  displayedColumns: string[] = ['id', 'status','description', 'actions'];
  
  work:any
  ngOnInit(): void {
  this.vendorGetService.getWorkServices().subscribe(
    (data)=>{
      this.work=data;
      console.log(data);

    },
    (error)=>{

    }
  )
  }

}
