import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private vendorService:VendorService) { }
  product={
    product_name:'',
    description:'',
    type:'',
    price:''
  }
  ngOnInit(): void {
  }

  productSubmit(){
    this.vendorService.addProduct(this.product).subscribe(
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
