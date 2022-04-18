import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from 'src/app/service/vendor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-apply-forwork',
  templateUrl: './apply-forwork.component.html',
  styleUrls: ['./apply-forwork.component.css']
})
export class ApplyForworkComponent implements OnInit {

  constructor(private vendorService:VendorService,private route:ActivatedRoute) { }
id:any
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.work.id=this.id;
  }
  work={
    name:'',
    description:'',
    id:''
  }
  formSubmit(){
    this.vendorService.addWork(this.work).subscribe((data)=>{
      
      console.log(this.work)
      Swal.fire('Successfull','','success')
    },(error)=>{
      Swal.fire('Something went wrong','','error')
    })
  }

}
