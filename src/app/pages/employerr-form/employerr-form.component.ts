import { Component, OnInit } from '@angular/core';
import { EmployeerService } from 'src/app/service/employeer.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employerr-form',
  templateUrl: './employerr-form.component.html',
  styleUrls: ['./employerr-form.component.css']
})
export class EmployerrFormComponent implements OnInit {

  constructor(private employeerService:EmployeerService) { }

  employeer={
    nid:'',
    shopName:''
  }
  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.employeer)
    if(this.employeer.nid==null ||this.employeer.shopName==''){
      Swal.fire('Please give needed data','','warning')
    }
    else{
      this.employeerService.addEmployeer(this.employeer).subscribe(
        (data:any)=>{
          console.log(this.employeer)
          Swal.fire('Successfull','','success')
        },
        (error)=>{
          Swal.fire('Something went wrong','','error')
        }
      )
    }
  }

}
