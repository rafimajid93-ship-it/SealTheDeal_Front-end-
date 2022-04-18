import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  q:any;
  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
  this.vendorService.getVendor().subscribe((data) =>{
    this.q=data
    console.log(this.q)
  } )
  }
 


}
