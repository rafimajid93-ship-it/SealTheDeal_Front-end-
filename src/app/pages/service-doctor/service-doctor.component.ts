import { Component, OnInit } from '@angular/core';
import { VendorGetServiceService } from 'src/app/service/vendor-get-service.service';

@Component({
  selector: 'app-service-doctor',
  templateUrl: './service-doctor.component.html',
  styleUrls: ['./service-doctor.component.css']
})
export class ServiceDoctorComponent implements OnInit {

  constructor(private vendorGetService:VendorGetServiceService) { }
  displayedColumns: string[] = ['id', 'status', 'actions'];
  list:any
  ngOnInit(): void {
  this.vendorGetService.getDoctorServices().subscribe(
    (data)=>{
      this.list=data;
      console.log(data)

    },
    (error)=>{

    }
  )
  }


}
