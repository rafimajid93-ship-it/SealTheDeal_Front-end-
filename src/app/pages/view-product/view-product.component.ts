import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  products:any
  ngOnInit(): void {
    this.vendorService.getProduct().subscribe(
      (data:any)=>{
        this.products = data;
        console.log(data);
      },
      (error)=>{
        console.log(error)
        Swal.fire("Error","Can not load data.","error")
      }
    )
  }

}
