import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-legal-client',
  templateUrl: './view-legal-client.component.html',
  styleUrls: ['./view-legal-client.component.css']
})
export class ViewLegalClientComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'appointmentContact','type','actions'];
  constructor(private vendorService:VendorService) { }
  legal:any;
  ngOnInit(): void {
    this.vendorService.getLegal().subscribe(
      (data)=>{
        this.legal=data
        console.log(this.legal)
      },
      (error)=>{

      }
    )
  }

  Legal(r:any){
    this.vendorService.LegalHelp(r).subscribe(
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
