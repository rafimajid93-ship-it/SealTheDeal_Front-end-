import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-view-water-support',
  templateUrl: './view-water-support.component.html',
  styleUrls: ['./view-water-support.component.css']
})
export class ViewWaterSupportComponent implements OnInit {


  displayedColumns: string[] = ['id','agencyName', 'address', 'price', 'service_contact','actions2','actions'];
  constructor(private vendorService:VendorService) { }
  water:any;
  ngOnInit(): void {
    this.vendorService.getWater().subscribe(
      (data)=>{
        this.water=data
        console.log(this.water)
      },
      (error)=>{

      }
    )
  }
  r={
    
  }
  quan:any;
  waterConsumer={
    quantity:'',
    water:{

    }
  }

  formSubmit(){
    console.log(this.waterConsumer)
  }
  waterOrder(r:any,){
    
    
    this.waterConsumer.water=r
    console.log(this.waterConsumer)
    this.vendorService.orderWater(this.waterConsumer).subscribe(
      (data)=>{
      
        Swal.fire("Requested","","success")
    },
    (error)=>{
      Swal.fire("Error","Can not load data.","error")
    }
    )
    console.log(r.id)

  }
}
