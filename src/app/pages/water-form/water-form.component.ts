import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-water-form',
  templateUrl: './water-form.component.html',
  styleUrls: ['./water-form.component.css']
})
export class WaterFormComponent implements OnInit {

  constructor(private vendorService:VendorService) { }

  water={
    address:'',
    price:'',
    service_contact:'',
    agencyName:''
  }

  ngOnInit(): void {
  }

  waterSubmit(){
    this.vendorService.addWater(this.water).subscribe(
      (data:any)=>{
        console.log(this.water)
        Swal.fire('Successfull','','success')
      },
      (error)=>{
        Swal.fire('Something went wrong','','error')
      }
    )
  }
}
