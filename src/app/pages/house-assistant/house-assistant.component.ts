import { Component, OnInit } from '@angular/core';
import { HouseAssistantService } from 'src/app/service/house-assistant.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-house-assistant',
  templateUrl: './house-assistant.component.html',
  styleUrls: ['./house-assistant.component.css']
})
export class HouseAssistantComponent implements OnInit {

  constructor(private houseAssistantService:HouseAssistantService) { }

  houseAssistant={
    price:'',
    type:'',
    rating:'',
    address:'' 
  }
  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.houseAssistant)
    if(this.houseAssistant.address==null ||this.houseAssistant.price==''||this.houseAssistant.rating==null){
      // alert("Please enter username")
      Swal.fire('Please give needed data','','warning')

    }
    else{
      this.houseAssistantService.addHouseAssistant(this.houseAssistant).subscribe(
        (data:any)=>{
          console.log(this.houseAssistant)
         
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


