import { Component, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/service/consumer.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  constructor(private consumerService:ConsumerService) { }
  consumer={
    profession:'',
    address:'',
    
  }
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.consumer)
    if(this.consumer.address==null ||this.consumer.address==''||this.consumer.profession==null){
      // alert("Please enter username")
      Swal.fire('Please give needed data','','warning')

    }
    else{
      this.consumerService.addConsumer(this.consumer).subscribe(
        (data:any)=>{
          console.log(this.consumer)
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
