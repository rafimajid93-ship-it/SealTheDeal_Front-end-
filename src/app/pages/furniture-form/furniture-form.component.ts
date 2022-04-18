import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-furniture-form',
  templateUrl: './furniture-form.component.html',
  styleUrls: ['./furniture-form.component.css']
})
export class FurnitureFormComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  furniture={
    address:'',
    price:'',
    quantity:'',
    date:'',
    description:'',
    product_name:'',
   
  }

  ngOnInit(): void {
  }
 
  furnitureSubmit(){
    console.log(this.furniture)
    if(this.furniture.address==null ||this.furniture.quantity==''||this.furniture.product_name==null){
      // alert("Please enter username")
      Swal.fire('Please give needed data','','warning')

    }
    else{
      this.vendorService.addFurniture(this.furniture).subscribe(
        (data:any)=>{
          console.log(this.furniture)
         
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
