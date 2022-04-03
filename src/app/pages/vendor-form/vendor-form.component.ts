import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.css']
})
export class VendorFormComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  apartment={
    address:'',
    rent:'',
    description:'',
  }
  flag=null;
  ngOnInit(): void {
    this.vendorService.getVendor().subscribe(
      (data:any)=>{
        console.log(data)
        this.flag=data.type;
        console.log(data.type)
        console.log(this.flag)
      },
      (error)=>{}
    ) 
  }


  apartmentSubmit(){
    this.vendorService.addApartment(this.apartment).subscribe(
      (data:any)=>{
        console.log(this.apartment)
        Swal.fire('Successfull','','success')
      },
      (error)=>{
        Swal.fire('Something went wrong','','error')
      }
    )
  }
}
