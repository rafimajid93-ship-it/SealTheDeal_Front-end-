import { Component, OnInit } from '@angular/core';
import { LegalService } from 'src/app/service/legal.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit {

  constructor(private legalService:LegalService) { }

  legal={
    registrationNumber:'',
    description:'',
    appointmentContact:'',
    type:''
  }
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.legal)
    if(this.legal.description==null ||this.legal.description==''||this.legal.registrationNumber==null){
      Swal.fire('Please give needed data','','warning')
    }
    else{
      this.legalService.addLegal(this.legal).subscribe(
        (data:any)=>{
          console.log(this.legal)
          Swal.fire('Successfull','','success')
        },
        (error)=>{
          Swal.fire('Something went wrong','','error')
        }
      )
    }
  }
}
