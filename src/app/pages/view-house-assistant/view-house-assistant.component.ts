import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-house-assistant',
  templateUrl: './view-house-assistant.component.html',
  styleUrls: ['./view-house-assistant.component.css']
})
export class ViewHouseAssistantComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'type','rating','address','actions'];
  constructor(private vendorService:VendorService) { }
  assistant:any;
  
  ngOnInit(): void {
    this.vendorService.getHouseAssistant().subscribe(
      (data)=>{
        this.assistant=data
        console.log(this.assistant)
      },
      (error)=>{

      }
    )
  }
  assistnat(r:any){
    this.vendorService.assitantHelp(r).subscribe(
      (data)=>{
        Swal.fire("Requested","","success")
    },
    (error)=>{
      Swal.fire("Error","Please try again","error")
    }
    )
    console.log(r.id)

  }

}
