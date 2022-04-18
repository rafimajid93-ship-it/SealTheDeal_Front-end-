import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-home-support',
  templateUrl: './home-support.component.html',
  styleUrls: ['./home-support.component.css']
})
export class HomeSupportComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  houseSupport={
    agencyName:'',
    agencyContact:'',
    description:''
  }
  ngOnInit(): void {

  }
  formSubmit(){
    console.log(this.houseSupport)
    if(this.houseSupport.agencyContact==null ||this.houseSupport.agencyName==''||this.houseSupport.description==null){
      // alert("Please enter username")
      Swal.fire('Please give needed data','','warning')

    }
    else{
      this.vendorService.addHouseService(this.houseSupport).subscribe(
        (data:any)=>{
          console.log(this.houseSupport)
         
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
