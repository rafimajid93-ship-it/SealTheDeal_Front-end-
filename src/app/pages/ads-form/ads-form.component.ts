import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-ads-form',
  templateUrl: './ads-form.component.html',
  styleUrls: ['./ads-form.component.css']
})
export class AdsFormComponent implements OnInit {

  constructor(private vendorService:VendorService) { }
  ads:any
  ngOnInit(): void {
    
  }


}
