import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private vendorService:VendorService) { }
  flagFalse=false;
  flag=null;
  ngOnInit(): void {
    this.vendorService.getVendor().subscribe(
      (data:any)=>{
        console.log(data)
        this.flag=data.type;
      
      },
      (error)=>{}
    ) 
  }

}
