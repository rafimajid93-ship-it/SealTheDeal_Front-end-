import { Component, OnInit } from '@angular/core';
import { EmployeerService } from 'src/app/service/employeer.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.css']
})
export class WorkFormComponent implements OnInit {
  work={
    type:'',
    amount:'',
    description:'',
  }
  constructor(private employeerService:EmployeerService) { }

  ngOnInit(): void {
  }
  formSubmit(){
    this.employeerService.addWork(this.work).subscribe(
      (data:any)=>{
        console.log(data)
        Swal.fire('Successfull','','success')
        window.location.href="/user/ven"
      },
      (error)=>{
        Swal.fire('Something went wrong','','error')
      }
    )
  }

}
