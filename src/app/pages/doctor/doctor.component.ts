import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/doctor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctor={
    specialized:'',
    registrationNumber:'',
    appointmentContact:'',
    degree:''
  }
  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.doctor)
    if(this.doctor.specialized==null ||this.doctor.specialized==''||this.doctor.registrationNumber==null){
      Swal.fire('Please give needed data','','warning')
    }
    else{
      this.doctorService.addDoctor(this.doctor).subscribe(
        (data:any)=>{
          console.log(this.doctor)
          Swal.fire('Successfull','','success')
          window.location.href="/user/ven"
        },
        (error)=>{
          Swal.fire('Something went wrong','','error')
        }
      )
    }
  }

}
