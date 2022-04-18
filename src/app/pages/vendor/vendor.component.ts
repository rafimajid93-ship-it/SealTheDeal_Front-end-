import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2'
import baseUrl from 'src/app/service/helper';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {


  constructor(private vendorService:VendorService,private http:HttpClient) { }

  vendor={
    shopName:'',
    shopDetails:'',
    idPic:'',
    address:'',
    type:'',
 }
  file:any;
  flag=true;
  selectFile(event:any){
    this.file=event.target.files[0];
  }
  uploadFile(){
    let formData=new FormData();
    formData.append('file',this.file)
    this.http.post(`${baseUrl}/user/fileUpload`,formData).subscribe(
      (data)=>{

      },(error)=>{
        alert('Error')
      }
    )
  }

  
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
  //  let formData = new FormData();
  //  formData.append('file',this.file)


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