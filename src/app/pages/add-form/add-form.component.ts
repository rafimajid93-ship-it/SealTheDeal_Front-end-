import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  ads={
    price:'',
    company_name:'',
    date:'',
    description:'',
    product_name:''
  }
  ngOnInit(): void {
  }
  adsSubmit(){
    this.vendorService.addAds(this.ads).subscribe(
      (data:any)=>{
        console.log(data)
        Swal.fire('Successfull','','success')
      },
      (error)=>{
        Swal.fire('Something went wrong','','error')
      }
    )
  }
}
