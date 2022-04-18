import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-furniture',
  templateUrl: './view-furniture.component.html',
  styleUrls: ['./view-furniture.component.css']
})
export class ViewFurnitureComponent implements OnInit {

 public myCart:any = []
  constructor(private vendorService:VendorService) { }

  furnitures:any
  ngOnInit(): void {
    this.vendorService.getFurniture().subscribe(
      (data:any)=>{
        this.furnitures = data;
        console.log(data);
      },
      (error)=>{
        console.log(error)
        Swal.fire("Error","Can not load data.","error")
      }
    )
  }
  cartCounter(q:any){
  this.myCart.push(q)
  console.log(this.myCart.length)
  console.log(q)
  }
 
  public getcart(){
    return this.myCart;
  }
}
