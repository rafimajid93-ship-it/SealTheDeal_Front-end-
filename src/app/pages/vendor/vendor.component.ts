import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {


  constructor(private vendorService:VendorService) { }

  vendor={
    shopName:'',
    shopDetails:'',
    idPic:'',
    address:'',
    type:''


  }
  flag=true;

  ngOnInit(): void {
    console.log('doing')
    this.vendorService.getVendor().subscribe(
      (data:any)=>{
        if(data == null){
          this.flag=false;
          console.log(data)
          
        }
        else{
          console.log(data)
          console.log(this.flag)
        }
    
      },
      (error)=>{
 
      }
    ) 
   
  }
  formSubmit(){
    console.log(this.vendor)
    if(this.vendor.address==null ||this.vendor.idPic==''||this.vendor.shopDetails==null){
      // alert("Please enter username")
      Swal.fire('Please give needed data','','warning')

    }
    else{
      this.vendorService.addVendor(this.vendor).subscribe(
        (data:any)=>{
          console.log(this.vendor)
         
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
