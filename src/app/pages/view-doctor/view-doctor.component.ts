import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/doctor.service';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'appointmentContact', 'specialized','degree','actions'];
  constructor(private vendorService:VendorService,private doctorService:DoctorService) { }
  doctor:any;
  ngOnInit(): void {
    this.vendorService.getDoctor().subscribe(
      (data)=>{
        this.doctor=data
        console.log(this.doctor)
      },
      (error)=>{

      }
    )
  }
  dConsumer={
    
  }
  dAppoinment(r:any){
    this.doctorService.addAppointment(r).subscribe(
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
